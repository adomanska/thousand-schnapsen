import { select, boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Size } from "../../utils/types";
import { CardsStack } from "./CardsStack";
import { Card } from "../../models/Card";
import { Color } from "../../models/Color";
import { Rank } from "../../models/Rank";

const cards: Card[] = [
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
];

const sizeOptions: { [key: string]: Size } = {
  Small: "small",
  Medium: "medium",
  Large: "large",
};

storiesOf("Features|Game/CardsStack", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <CardsStack
      cards={cards}
      size={select("Size", sizeOptions, "small")}
      revealed={boolean("Revealed", true)}
    />
  ));
