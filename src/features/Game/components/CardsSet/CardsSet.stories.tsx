import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import { Size } from "../../utils/types";
import { CardsSet } from "./CardsSet";
import { Color } from "../../models/Color";
import { Rank } from "../../models/Rank";
import { Card } from "../../models/Card";

const initialCards: Card[] = [
  {
    suit: Color.Diamonds,
    rank: Rank.Nine,
  },
  {
    suit: Color.Clubs,
    rank: Rank.Nine,
  },
  {
    suit: Color.Diamonds,
    rank: Rank.Ace,
  },
  {
    suit: Color.Diamonds,
    rank: Rank.Jack,
  },
  {
    suit: Color.Hearts,
    rank: Rank.Ten,
  },
  {
    suit: Color.Spades,
    rank: Rank.Queen,
  },
  {
    suit: Color.Clubs,
    rank: Rank.Jack,
  },
];

const cardsToSelectCountOptions = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
};

const sizeOptions: { [key: string]: Size } = {
  Small: "small",
  Medium: "medium",
  Large: "large",
};

const CardsSetWrapper: React.FC = () => {
  const [cards, setCards] = useState(initialCards);

  const handleSelect = (selectedCards: Card[]) => {
    const newCards = cards.filter((card) => !selectedCards.includes(card));
    setCards(newCards);
  };

  return (
    <CardsSet
      cards={cards}
      cardsToSelectCount={select(
        "Cards to select count",
        cardsToSelectCountOptions,
        cardsToSelectCountOptions[2]
      )}
      active={boolean("Active", true)}
      onSelect={handleSelect}
      size={select("Size", sizeOptions, "small")}
    />
  );
};

storiesOf("Features|Game/CardsSet", module)
  .addDecorator(withKnobs)
  .add("default", () => <CardsSetWrapper />);
