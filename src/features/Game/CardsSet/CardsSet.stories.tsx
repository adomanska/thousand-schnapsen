import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import { Color, Rank } from "../Card/types";
import { ICard } from "../types";
import { CardsSet } from "./CardsSet";

const initialCards: ICard[] = [
  {
    color: Color.Diamonds,
    rank: Rank.Nine
  },
  {
    color: Color.Clubs,
    rank: Rank.Nine
  },
  {
    color: Color.Diamonds,
    rank: Rank.Ace
  },
  {
    color: Color.Diamonds,
    rank: Rank.Jack
  },
  {
    color: Color.Hearts,
    rank: Rank.Ten
  },
  {
    color: Color.Spades,
    rank: Rank.Queen
  },
  {
    color: Color.Clubs,
    rank: Rank.Jack
  }
];

const cardsToSelectCountOptions = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7
};

const CardsSetWrapper: React.FC = () => {
  const [cards, setCards] = useState(initialCards);

  const handleSelect = (selectedCards: ICard[]) => {
    const newCards = cards.filter(card => !selectedCards.includes(card));
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
    />
  );
};

storiesOf("Features|Game/CardsSet", module)
  .addDecorator(withKnobs)
  .add("default", () => <CardsSetWrapper />);
