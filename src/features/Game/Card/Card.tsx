import React, { useMemo } from "react";
import styled from "styled-components";
import { Icon } from "../../../components/Icon/Icon";
import {
  colorsIconTypesMapping,
  ranksColorsIconTypesMapping,
  ranksSymbolsMapping
} from "./mappings";
import { Color, Rank } from "./types";

interface ICardDiv {
  height: number; // in vh unit
}

const CardDiv = styled.div<ICardDiv>`
  background: white;
  border-radius: 3vh;
  box-shadow: 0 0 10px 5px gray;
  height: ${({ height }) => height}vh;
  width: ${({ height }) => (5 * height) / 8}vh;

  &:after {
    content: "";
    display: table;
    clear: both;
  }

  &:hover {
    box-shadow: 0 0 10px 5px lightblue;
  }
`;

interface ICardColumn {
  width: number; // in percents
  rotation?: number; // in turns
}

const CardColumn = styled.div<ICardColumn>`
  width: ${({ width }) => width}%;
  float: left;
  height: 100%;
  display: flex;
  transform: ${({ rotation }) =>
    rotation ? `rotate(${rotation}turn)` : undefined};
`;
const SideColumn = styled(CardColumn)`
  flex-direction: column;
  justify-content: flex-start;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 1.5vh;
`;

const MiddleColumn = styled(CardColumn)`
  justify-content: center;
`;

const RankSpan = styled.span`
  display: flex;
  justify-content: center;
  font-size: 5vh;
  font-family: Arial;
`;

const StyledIcon = styled(Icon)`
  width: 100%;
  height: auto;
`;

interface IProps {
  color: Color;
  rank: Rank;
  height?: number;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<IProps> = ({
  color,
  rank,
  className,
  onClick,
  height = 60
}) => {
  const ColorIcon: React.FC = useMemo(
    () => () => (
      <StyledIcon iconType={colorsIconTypesMapping[color]} alt="Color Icon" />
    ),
    [color]
  );

  const RankIcon: React.FC = useMemo(
    () => () => (
      <StyledIcon
        iconType={ranksColorsIconTypesMapping[rank][color]}
        alt="Rank Icon"
      />
    ),
    [rank, color]
  );

  return (
    <CardDiv height={height} className={className} onClick={onClick}>
      <SideColumn width={20}>
        <RankSpan>{ranksSymbolsMapping[rank]}</RankSpan>
        <ColorIcon />
      </SideColumn>
      <MiddleColumn width={60}>
        <RankIcon />
      </MiddleColumn>
      <SideColumn width={20} rotation={0.5}>
        <RankSpan>{ranksSymbolsMapping[rank]}</RankSpan>
        <ColorIcon />
      </SideColumn>
    </CardDiv>
  );
};
