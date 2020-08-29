import { select, boolean, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { CardFE, Color, Rank, Size } from "../../utils/types";
import { CardsStack } from "./CardsStack";

const cards: CardFE[] = [
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
