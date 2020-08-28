import React from "react";
import { storiesOf } from "@storybook/react";
import { Marriages } from "./Marriages";
import { Color } from "../../utils/types";

storiesOf("Features|Game/Marriages", module)
  .add("default", () => (
    <Marriages
        usedMariages={[Color.Clubs, Color.Hearts]}
        activeMarriage={Color.Clubs}
    />
  ));