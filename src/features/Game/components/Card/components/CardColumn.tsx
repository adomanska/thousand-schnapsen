import styled from "styled-components";

interface CardColumnProps {
  width: number; // in percents
  rotation?: number; // in turns
}

export const CardColumn = styled.div<CardColumnProps>`
  width: ${({ width }) => width}%;
  float: left;
  height: 100%;
  display: flex;
  transform: ${({ rotation }) =>
    rotation ? `rotate(${rotation}turn)` : undefined};
`;
