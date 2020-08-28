import React from "react";
import styled from "styled-components";
import { Card } from "../Card";
import { ICard, Size } from "../../utils/types";

const CardsStackDiv = styled.div`
  pointer-events: none;
  display: grid;
  width: fit-content;
  padding: 3rem;
`;

interface IRotatedCardProps {
  rotation?: number; // in turns
}

const RotatedCard = styled(Card)<IRotatedCardProps>`
  transform: ${({ rotation }) =>
    rotation ? `rotate(${rotation}turn)` : undefined};
  grid-column: 1;
  grid-row: 1;
`;

interface ICardsStackProps {
  cards: ICard[];
  size?: Size;
}

export const CardsStack: React.FC<ICardsStackProps> = ({ cards, size }) => {
  const rotationStep = 0.06;

  return (
    <CardsStackDiv>
      {cards.map((card, index) => (
        <RotatedCard
          key={`stack-card-${index}`}
          color={card.color}
          rank={card.rank}
          rotation={rotationStep * index}
          size={size}
        />
      ))}
    </CardsStackDiv>
  );
};
