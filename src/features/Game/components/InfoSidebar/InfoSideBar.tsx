import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Marriages } from "../Marriages";
import { Points } from "../Points";
import { Button, Paper } from "@material-ui/core";
import { NewGameModal } from "../NewGameModal";
import { Error } from "../../../../components/Error";
import { useInitNewGame } from "./hooks";
import { GameSetup } from "../../models/GameSetup";
import { GameState } from "../../models/GameState";
import { Loader } from "../../../../components/Loader";

const Drawer = styled(Paper)`
  width: 20%;
  margin: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 2rem;
  }
`;

const DrawerItemHeader = styled.span`
  color: #3f51b5;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const DrawerItem = styled.div`
  display: flex;
  flex-direction: column;

  &:last-child {
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
  }
`;

interface InfoSideBarProps {
  data: GameState;
  updateData: (data: GameState) => void;
}

export const InfoSideBar: React.FC<InfoSideBarProps> = ({ data, updateData }) => {
  const { usedMarriages, activeMarriage, playerNames, points } = data;
  const [newGameModalOpen, setNewGameModalOpen] = useState(false);
  const { initNewGame, isLoading, isError, closeError } = useInitNewGame(updateData);

  const handleNewGameButtonClick = useCallback(
    () => setNewGameModalOpen(true),
    [setNewGameModalOpen]
  );

  const handleNewGameModalClose = useCallback(
    () => setNewGameModalOpen(false),
    [setNewGameModalOpen]
  );

  const initializeNewGame = useCallback(
    (gameSetup: GameSetup) => {
      initNewGame(gameSetup);
      setNewGameModalOpen(false);
    },
    [initNewGame, setNewGameModalOpen]
  );

  return (
    <>
      <Drawer>
        <DrawerItem>
          <DrawerItemHeader>MARRIAGES</DrawerItemHeader>
          <Marriages
            usedMariages={usedMarriages}
            activeMarriage={activeMarriage}
          />
        </DrawerItem>
        <DrawerItem>
          <DrawerItemHeader>POINTS</DrawerItemHeader>
          <Points playerNames={playerNames} points={points} />
        </DrawerItem>
        <DrawerItem>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleNewGameButtonClick}
          >
            New game
          </Button>
        </DrawerItem>
      </Drawer>
      <NewGameModal
        open={newGameModalOpen}
        onClose={handleNewGameModalClose}
        onSubmit={initializeNewGame}
      />
      <Loader open={isLoading} />
      <Error
        open={isError}
        message={"Game initialization failed. Please try again."}
        onClose={closeError}
      />
    </>
  );
};
