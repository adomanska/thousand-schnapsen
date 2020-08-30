import React, { useMemo } from "react";
import styled from "styled-components";
import { Opponent } from "./components";
import { Table } from "../Table";
import { CardsStack } from "../CardsStack";
import { Rank } from "../../models/Rank";
import { Color } from "../../models/Color";
import { CardsSet } from "../CardsSet";

const GameStateDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

const mockState = {
  playerId: 1,
  nextPlayerId: 1,
  playerNames: ["Opponent1", "Me", "Opponent2"],
  stack: [
    { rank: Rank.Queen, color: Color.Clubs },
    { rank: Rank.Jack, color: Color.Diamonds },
  ],
  hand: [
    { rank: Rank.Jack, color: Color.Spades },
    { rank: Rank.Nine, color: Color.Clubs },
    { rank: Rank.King, color: Color.Clubs },
    { rank: Rank.Ace, color: Color.Clubs },
    { rank: Rank.Queen, color: Color.Diamonds },
    { rank: Rank.King, color: Color.Diamonds },
    { rank: Rank.Ten, color: Color.Hearts },
    { rank: Rank.Ace, color: Color.Hearts },
  ],
  availableActions: [
    { rank: Rank.King, color: Color.Clubs },
    { rank: Rank.Ace, color: Color.Clubs },
    { rank: Rank.King, color: Color.Diamonds },
  ],
};

export const GameState: React.FC = () => {
  const playersCount = 3;
  const {
    playerId,
    nextPlayerId,
    playerNames,
    stack,
    hand,
    availableActions,
  } = mockState; // TODO: Replace with state fetched from redux store

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
