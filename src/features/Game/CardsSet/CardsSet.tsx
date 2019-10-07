import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Card } from "../Card/Card";
import { ICard } from "../types";

interface ICardsSetDiv {
  active?: boolean;
}

const CardsSetDiv = styled.div<ICardsSetDiv>`
  display: flex;
  position: relative;
  cursor: ${({ active }) => active ? "pointer" : "default"};
  pointer-events: ${({ active }) => active ? "auto" : "none"};
`;

interface IStyledCard {
  offsetStep: number;
  index: number;
  selected?: boolean;
}

const StyledCard = styled(Card)<IStyledCard>`
  left: ${({ offsetStep, index }) => offsetStep * index}vh;
  position: absolute;
  top: ${({ selected, offsetStep }) => selected ? 0 : offsetStep / 2}vh;
`;

interface IProps {
  cards: ICard[];
  height?: number;
  active?: boolean;
  cardsToSelectCount?: number;
  onSelect?: (cards: ICard[]) => void;
}

export const CardsSet: React.FC<IProps> = ({ cards, cardsToSelectCount, onSelect, active, height = 60 }) => {
  const [selectedCards, setSelectedCards] = useState<ICard[]>([]);

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

  const handleCardSelect = useCallback((selectedCard: ICard) => () => {
    if (selectedCards.includes(selectedCard)) {
      setSelectedCards(selectedCards.filter(card => card !== selectedCard));
      return;
    }
    if (cardsToSelectCount && selectedCards.length >= cardsToSelectCount) {
      setSelectedCards([...selectedCards.slice(1), selectedCard]);
    } else {
      setSelectedCards([...selectedCards, selectedCard]);
    }
  }, [cardsToSelectCount, selectedCards])

  return (
    <CardsSetDiv active={active}>
      {cards.sort(cardsCompare).map((card, index) => (
        <StyledCard
          key={`card-${index}`}
          height={height}
          color={card.color}
          rank={card.rank}
          offsetStep={offsetStep}
          index={index}
          selected={selectedCards.includes(card)}
          onClick={handleCardSelect(card)}
        />
      ))}
    </CardsSetDiv>
  );
};
