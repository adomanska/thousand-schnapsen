import { Size } from "../../../utils/types";
import styled from "styled-components";
import { CardColumn } from "./CardColumn";

const sizePaddingMappings = {
  small: "0.2rem",
  medium: "0.3rem",
  large: "0.4rem",
};

interface SideColumnProps {
  size: Size;
}

export const SideColumn = styled(CardColumn)<SideColumnProps>`
  flex-direction: column;
  justify-content: flex-start;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: ${({ size }) => sizePaddingMappings[size]};
`;
