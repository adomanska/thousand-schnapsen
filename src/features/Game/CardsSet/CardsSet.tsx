import React from "react";
import styled from "styled-components";
import { Card } from "../Card/Card";
import { Color, Rank } from "../Card/types";

const CardsSetDiv = styled.div`
  display: flex;
  position: relative;
`;

interface IStyledCard {
  offset: number;
}

const StyledCard = styled(Card)<IStyledCard>`
  left: ${({ offset }) => offset}vh;
  position: absolute;
`;

export interface ICard {
  rank: Rank;
  color: Color;
}

interface IProps {
  cards: ICard[];
  height?: number;
}

export const CardsSet: React.FC<IProps> = ({ cards, height = 60 }) => {
  const offsetStep = height / 6;

  const cardsCompare = (cardA: ICard, cardB: ICard) => {
    if (cardA.color < cardB.color) {
      return -1;
    } else if (cardA.color > cardB.color) {
      return 1;
    } else {
      return cardA.rank < cardB.rank ? -1 : 1;
    }
  };

  return (
    <CardsSetDiv>
      {cards.sort(cardsCompare).map((card, index) => (
        <StyledCard
          key={`card-${index}`}
          height={height}
          color={card.color}
          rank={card.rank}
          offset={index * offsetStep}
        />
      ))}
    </CardsSetDiv>
  );
};
