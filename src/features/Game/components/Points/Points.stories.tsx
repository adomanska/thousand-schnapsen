import React from "react";
import { storiesOf } from "@storybook/react";
import { Points } from "./Points";

const playerNames = ["Me", "Opponent 1", "Opponent 2"];

const points = [120, 40, 50];

storiesOf("Features|Game/Points", module).add("default", () => (
  <Points playerNames={playerNames} points={points} />
));
