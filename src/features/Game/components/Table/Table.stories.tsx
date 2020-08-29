import { storiesOf } from "@storybook/react";
import React from "react";
import { CardFE, Color, Rank } from "../../utils/types";
import { Table } from "./Table";
import { CardsStack } from "../CardsStack";

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

storiesOf("Features|Game/Table", module).add("default", () => (
  <Table>
    <CardsStack cards={cards} size={"medium"} />
  </Table>
));
