import { Size } from "../Card.types";
import styled from "styled-components";

const sizeFontSizeMappings = {
  small: "1rem",
  medium: "1.5rem",
  large: "2rem",
};

interface IProps {
  size: Size;
}

export const RankSpan = styled.span<IProps>`
  display: flex;
  justify-content: center;
  font-size: ${({ size }) => sizeFontSizeMappings[size]};
  font-family: Arial;
`;
