import Button from "@material-ui/core/Button";
import React, { useCallback, useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import { Card } from "../Card/Card";
import { CardFE, Size } from "../../utils/types";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardsDiv = styled.div`
  display: flex;
  width: fit-content;
  margin-bottom: 1rem;
`;

interface StyledCardProps {
  active?: boolean;
  selected?: boolean;
}
const StyledCard = styled(Card)<StyledCardProps>`
  margin: 5px;
  box-shadow: 0 0 10px 5px
    ${({ selected }) => (selected ? "lightblue" : "gray")};
  pointer-events: ${({ active }) => (active ? "auto" : "none")};
  ${({ selected }) => selected && "margin-top: -0.5rem;"}
`;

interface CardsSetProps {
  cards: CardFE[];
  active?: boolean;
  cardsToSelectCount?: number;
  onSelect?: (cards: CardFE[]) => void;
  size?: Size;
}

export const CardsSet: React.FC<CardsSetProps> = ({
  cards,
  active,
  cardsToSelectCount,
  onSelect,
  size,
}) => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  useEffect(() => {
    if (!active) {
      setSelectedCards([]);
    }
  }, [active]);

  const handleCardClick = useCallback(
    (index: number) => () => {
      if (active) {
        if (selectedCards.includes(index)) {
          setSelectedCards(
            selectedCards.filter((curIndex) => curIndex !== index)
          );
        } else if (
          cardsToSelectCount &&
          selectedCards.length < cardsToSelectCount
        ) {
          setSelectedCards([...selectedCards, index]);
        }
      }
    },
    [active, selectedCards, setSelectedCards]
  );

  const handleSelect = useCallback(() => {
    if (onSelect) {
      onSelect(selectedCards.map((index) => cards[index]));
      setSelectedCards([]);
    }
  }, [onSelect, selectedCards, cards, setSelectedCards]);

  const selectButtonDisabled = useMemo(
    () =>
      !active ||
      (cardsToSelectCount !== undefined &&
        selectedCards.length < cardsToSelectCount),
    [active, selectedCards, cardsToSelectCount]
  );

  return (
    <MainDiv>
      <CardsDiv>
        {cards.map(({ rank, color }, index) => (
          <StyledCard
            key={`${rank}-${color}`}
            rank={rank}
            color={color}
            size={size}
            active={active}
            selected={selectedCards.includes(index)}
            onClick={handleCardClick(index)}
          />
        ))}
      </CardsDiv>
      <Button
        size={size}
        disabled={selectButtonDisabled}
        onClick={handleSelect}
      >
        SELECT
      </Button>
    </MainDiv>
  );
};
