import { storiesOf } from "@storybook/react";
import React from "react";
import ColorButton from "./ColorButton";
storiesOf("Components|ColorButton", module)
  .add("red", () => <ColorButton color="red" />)
  .add("blue", () => <ColorButton color="blue" />);
