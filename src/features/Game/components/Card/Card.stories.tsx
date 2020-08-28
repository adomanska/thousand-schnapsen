import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Card } from "./Card";
import { Color, Rank, Size } from "../../utils/types";

const colorOptions = {
  Clubs: Color.Clubs,
  Diamonds: Color.Diamonds,
  Hearts: Color.Hearts,
  Spades: Color.Spades,
};

const rankOptions = {
  9: Rank.Nine,
  Jack: Rank.Jack,
  Queen: Rank.Queen,
  King: Rank.King,
  10: Rank.Ten,
  Ace: Rank.Ace,
};

const sizeOptions: {[key: string]: Size} = {
  Small: "small",
  Medium: "medium",
  Large: "large",
}

storiesOf("Features|Game/Card", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Card
      color={select("Color", colorOptions, Color.Clubs)}
      rank={select("Rank", rankOptions, Rank.Nine)}
      revealed={boolean("Revealed", true)}
      size={select("Size", sizeOptions, "small")}
    />
  ));
