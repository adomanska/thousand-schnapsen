import React from "react";
import styled from "styled-components";
import { Card } from "../Card";
import { Size } from "../../utils/types";
import { Card as CardModel } from "../../models/Card";

const CardsStackDiv = styled.div`
  pointer-events: none;
  display: grid;
  width: fit-content;
  padding: 3rem;
`;

interface RotatedCardProps {
  rotation?: number; // in turns
}

const RotatedCard = styled(Card)<RotatedCardProps>`
  transform: ${({ rotation }) =>
    rotation ? `rotate(${rotation}turn)` : undefined};
  grid-column: 1;
  grid-row: 1;
`;

interface CardsStackProps {
  cards: CardModel[];
  size?: Size;
  revealed?: boolean;
}

export const CardsStack: React.FC<CardsStackProps> = ({
  cards,
  size,
  revealed,
}) => {
  const rotationStep = 0.08;

  return (
    <CardsStackDiv>
      {cards.map((card, index) => (
        <RotatedCard
          key={`stack-card-${index}`}
          color={card.color}
          rank={card.rank}
          rotation={rotationStep * index}
          size={size}
          revealed={revealed}
        />
      ))}
    </CardsStackDiv>
  );
};
