import React from "react";
import styled from "styled-components";
import { Card } from "../Card/Card";
import { ICard } from "../types";

const CardsStackDiv = styled.div`
  pointer-events: none;
`;

interface IStyledCard {
  rotation?: number; // in turns
}

const StyledCard = styled(Card)<IStyledCard>`
  transform: ${({ rotation }) =>
    rotation ? `rotate(${rotation}turn)` : undefined};
`;

interface IStackLayer {
  card: ICard;
  height: number;
  rotation?: number;
  className?: string;
}

const StackLayer = styled(
  ({ card, height, rotation, className }: IStackLayer) => (
    <div className={className}>
      <StyledCard
        color={card.color}
        rank={card.rank}
        height={height}
        rotation={rotation}
      />
    </div>
  )
)`
  width: ${({ height }) => 1.18 * height}vh;
  height: ${({ height }) => 1.18 * height}vh;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
`;

interface IProps {
  cards: ICard[];
  cardHeight?: number;
}

export const CardsStack: React.FC<IProps> = ({ cards, cardHeight = 60 }) => {
  const rotationStep = 0.06;

  return (
    <CardsStackDiv>
      {cards.map((card, index) => (
        <StackLayer
          key={`stack-card-${index}`}
          card={card}
          rotation={rotationStep * index}
          height={cardHeight}
        />
      ))}
    </CardsStackDiv>
  );
};
