import { storiesOf } from "@storybook/react";
import React from "react";
import { Color, Rank } from "../Card/types";
import { ICard } from "../types";
import { CardsStack } from "./CardsStack";

const cards: ICard[] = [
  {
    color: Color.Diamonds,
    rank: Rank.Nine,
  },
  {
    color: Color.Clubs,
    rank: Rank.Nine,
  },
  {
    color: Color.Diamonds,
    rank: Rank.Ace,
  },
];

storiesOf("Features|Game/CardsStack", module).add("default", () => (
  <CardsStack cards={cards} />
));
