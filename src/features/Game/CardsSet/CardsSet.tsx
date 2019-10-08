import Button from "@material-ui/core/Button";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../Card/Card";
import { ICard } from "../types";

interface IMainDiv {
  width: number;
}

const MainDiv = styled.div<IMainDiv>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width}vh;
  align-items: center;
`;

interface ICardsSetDiv {
  active?: boolean;
  width: number;
  height: number;
}

const CardsSetDiv = styled.div<ICardsSetDiv>`
  display: flex;
  position: relative;
  cursor: ${({ active }) => (active ? "pointer" : "default")};
  pointer-events: ${({ active }) => (active ? "auto" : "none")};
  width: ${({ width }) => width}vh;
  height: ${({ height }) => height}vh;
`;

interface IStyledCard {
  offsetStep: number;
  index: number;
  selected?: boolean;
}

const StyledCard = styled(Card)<IStyledCard>`
  left: ${({ offsetStep, index }) => offsetStep * index}vh;
  position: absolute;
  top: ${({ selected, offsetStep }) => (selected ? 0 : offsetStep / 2)}vh;
`;

const SelectButton = styled(Button)`
  && {
    margin: 5vh;
    font-size: 3vh;
    font-family: Arial;
    font-weight: bold;
  }
`;

interface IProps {
  cards: ICard[];
  height?: number;
  active?: boolean;
  cardsToSelectCount?: number;
  onSelect?: (cards: ICard[]) => void;
}

export const CardsSet: React.FC<IProps> = ({
  cards,
  cardsToSelectCount,
  onSelect,
  active,
  height = 60
}) => {
  const [selectedCards, setSelectedCards] = useState<ICard[]>([]);

  const offsetStep = height / 6;
  const maxCardsCount = 7;

  useEffect(() => {
    if (cardsToSelectCount && cardsToSelectCount < selectedCards.length) {
      setSelectedCards([]);
    }
  }, [cardsToSelectCount, selectedCards.length]);

  const cardsCompare = (cardA: ICard, cardB: ICard) => {
    if (cardA.color < cardB.color) {
      return -1;
    } else if (cardA.color > cardB.color) {
      return 1;
    } else {
      return cardA.rank < cardB.rank ? -1 : 1;
    }
  };

  const handleCardSelect = useCallback(
    (selectedCard: ICard) => () => {
      if (selectedCards.includes(selectedCard)) {
        setSelectedCards(selectedCards.filter(card => card !== selectedCard));
        return;
      }
      if (cardsToSelectCount && selectedCards.length >= cardsToSelectCount) {
        setSelectedCards([...selectedCards.slice(1), selectedCard]);
      } else {
        setSelectedCards([...selectedCards, selectedCard]);
      }
    },
    [cardsToSelectCount, selectedCards]
  );

  const handleSelectButtonClick = useCallback(() => {
    if (onSelect) {
      onSelect(selectedCards);
      setSelectedCards([]);
    }
  }, [onSelect, selectedCards]);

  return (
    <MainDiv width={(5 * height) / 8 + (maxCardsCount - 1) * offsetStep}>
      <CardsSetDiv
        active={active}
        width={(5 * height) / 8 + (cards.length - 1) * offsetStep}
        height={height + offsetStep / 2}
      >
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
      {active && (
        <SelectButton
          disabled={selectedCards.length !== cardsToSelectCount}
          onClick={handleSelectButtonClick}
        >
          {`Select Card${
            cardsToSelectCount && cardsToSelectCount > 1 ? "s" : ""
          }`}
        </SelectButton>
      )}
    </MainDiv>
  );
};
