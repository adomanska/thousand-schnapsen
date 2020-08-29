import { Size } from "../../../utils/types";
import styled from "styled-components";

const sizeFontSizeMappings = {
  small: "1rem",
  medium: "1.5rem",
  large: "2rem",
};

interface RankSpanProps {
  size: Size;
}

export const RankSpan = styled.span<RankSpanProps>`
  display: flex;
  justify-content: center;
  font-size: ${({ size }) => sizeFontSizeMappings[size]};
  font-family: Arial;
`;
