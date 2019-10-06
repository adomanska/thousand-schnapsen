import { storiesOf } from "@storybook/react";
import React from "react";
import { Color, Rank } from "../Card/types";
import { CardsSet, ICard } from "./CardsSet";

const cards: ICard[] = [
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

storiesOf("Features|Game/CardsSet", module).add("default", () => (
  <CardsSet cards={cards} />
));
