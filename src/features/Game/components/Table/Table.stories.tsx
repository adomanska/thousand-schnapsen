import { storiesOf } from "@storybook/react";
import React from "react";
import { Table } from "./Table";
import { CardsStack } from "../CardsStack";
import { Card } from "../../models/Card";
import { Color } from "../../models/Color";
import { Rank } from "../../models/Rank";

const cards: Card[] = [
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
