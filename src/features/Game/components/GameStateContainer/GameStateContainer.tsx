import React, { useMemo } from "react";
import styled from "styled-components";
import { Opponent } from "./components";
import { Table } from "../Table";
import { CardsStack } from "../CardsStack";
import { GameState } from "../../models/GameState";
import { CardsSet } from "../CardsSet";

const GameStateDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
`;

const OpponentsDiv = styled.div`
  display: flex;
  margin-bottom: 2rem;

  & > * {
    width: 50%;
  }
`;

const CardsSetWithMargin = styled(CardsSet)`
  margin-top: 1rem;
`;

interface GameStateContainerProps {
  data: GameState;
}

export const GameStateContainer: React.FC<GameStateContainerProps> = ({
  data,
}) => {
  const playersCount = 3;
  const {
    playerId,
    nextPlayerId,
    playerNames,
    stack,
    hand,
    availableActions,
  } = data;

  const opponentsIds = useMemo(
    () =>
      Array.from(Array(playersCount - 1).keys()).map(
        (offset) => (playerId + offset + 1) % playersCount
      ),
    [playerId]
  );

  const handActive = useMemo(() => playerId === nextPlayerId, [
    playerId,
    nextPlayerId,
  ]);

  return (
    <GameStateDiv>
      <OpponentsDiv>
        {opponentsIds.map((opponentId) => (
          <Opponent
            key={opponentId}
            playerId={opponentId}
            nextPlayerId={nextPlayerId}
            playerNames={playerNames}
          />
        ))}
      </OpponentsDiv>
      <Table>
        <CardsStack cards={stack} />
      </Table>
      <CardsSetWithMargin
        cards={hand}
        active={handActive}
        cardsToSelectCount={1}
        availableCards={availableActions}
      />
    </GameStateDiv>
  );
};
