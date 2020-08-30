import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Color } from "../../models/Color";
import { Marriages } from "../Marriages";
import { Points } from "../Points";
import { Button, Paper, Backdrop, CircularProgress } from "@material-ui/core";
import { NewGameModal } from "../NewGameModal";
import { Error } from "./components";
import { useInitNewGame } from "./hooks";
import { PlayersSetup } from "../../models/PlayersSetup";

const Drawer = styled(Paper)`
  width: min-content;
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
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: 100;
`;

const mockData = {
  usedMariages: [Color.Spades, Color.Diamonds],
  activeMarriage: Color.Diamonds,
  playerNames: ["Opponent1", "Me", "Opponent2"],
  points: [40, 120, 60],
};

export const InfoSideBar: React.FC = () => {
  const { usedMariages, activeMarriage, playerNames, points } = mockData; // TODO: Replace mock data with data fetched from redux store
  const [newGameModalOpen, setNewGameModalOpen] = useState(false);
  const { initNewGame, isLoading, isError, closeError } = useInitNewGame();

  const handleNewGameButtonClick = useCallback(
    () => setNewGameModalOpen(true),
    [setNewGameModalOpen]
  );

  const handleNewGameModalClose = useCallback(
    () => setNewGameModalOpen(false),
    [setNewGameModalOpen]
  );

  const initializeNewGame = useCallback((data: PlayersSetup) => {
      initNewGame(data);
      setNewGameModalOpen(false);
    },
    [setNewGameModalOpen]
  );

  return (
    <>
      <Drawer>
        <DrawerItem>
          <DrawerItemHeader>MARRIAGES</DrawerItemHeader>
          <Marriages
            usedMariages={usedMariages}
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
      <StyledBackdrop open={isLoading}>
        <CircularProgress />
      </StyledBackdrop>
      <Error
        open={isError}
        message={"Game initialization failed. Please try again."}
        onClose={closeError}
      />
    </>
  );
};
