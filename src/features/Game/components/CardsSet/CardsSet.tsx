import Button from "@material-ui/core/Button";
import React, { useCallback, useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import { Card } from "../Card/Card";
import { Size } from "../../utils/types";
import { Card as CardModel } from "../../models/Card";

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
  disabled?: boolean;
}
const StyledCard = styled(Card)<StyledCardProps>`
  margin: 0.5rem;
  pointer-events: ${({ active, disabled }) => ((active && !disabled) ? "auto" : "none")};
  ${({ selected }) => selected && "margin-top: -0.75rem;"}
  ${({ active, disabled }) => (active && disabled) && "opacity: 0.2;"}
`;

interface CardsSetProps {
  cards: CardModel[];
  availableCards?: CardModel[];
  active?: boolean;
  cardsToSelectCount?: number;
  onSelect?: (cards: CardModel[]) => void;
  size?: Size;
  className?: string;
}

export const CardsSet: React.FC<CardsSetProps> = ({
  cards,
  availableCards,
  active,
  cardsToSelectCount,
  onSelect,
  size,
  className,
}) => {
  const [selectedCards, setSelectedCards] = useState<CardModel[]>([]);

  useEffect(() => {
    if (!active) {
      setSelectedCards([]);
    }
  }, [active]);

  const handleCardClick = useCallback(
    (card: CardModel) => () => {
      if (active) {
        if (selectedCards.includes(card)) {
          setSelectedCards(
            selectedCards.filter((curCard) => curCard !== card)
          );
        } else if (cardsToSelectCount && cardsToSelectCount > 1 && selectedCards.length < cardsToSelectCount) {
          setSelectedCards([...selectedCards, card]);
        } else if (cardsToSelectCount === 1) {
          setSelectedCards([card]);
        }
      }
    },
    [active, selectedCards, setSelectedCards, cardsToSelectCount]
  );

  const handleSelect = useCallback(() => {
    if (onSelect) {
      onSelect(selectedCards);
    }
    setSelectedCards([]);
  }, [onSelect, selectedCards, cards, setSelectedCards]);

  const selectButtonDisabled = useMemo(
    () =>
      !active ||
      (cardsToSelectCount !== undefined &&
        selectedCards.length < cardsToSelectCount),
    [active, selectedCards, cardsToSelectCount]
  );

  const isSelected = useCallback((card: CardModel) => 
    selectedCards.includes(card),
    [selectedCards]
  );

  const isDisabled = useCallback((card: CardModel) =>
    availableCards && !availableCards.some(({rank, color}) => card.color === color && card.rank === rank),
    [availableCards]
  );

  return (
    <MainDiv className={className}>
      <CardsDiv>
        {cards.map((card, index) => (
          <StyledCard
            key={`${card.rank}-${card.color}`}
            rank={card.rank}
            color={card.color}
            size={size}
            active={active}
            selected={isSelected(card)}
            disabled={isDisabled(card)}
            onClick={handleCardClick(card)}
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
