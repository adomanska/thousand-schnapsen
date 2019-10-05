import React, { useMemo } from "react";
import styled from "styled-components";
import { Icon, IconType } from "../../../components/Icon/Icon";
import { Color, Rank } from "./types";

interface ICardDiv {
  height: number; // in vh unit
}

const CardDiv = styled.div<ICardDiv>`
  background: white;
  border-radius: 3vh;
  box-shadow: 0 0 10px 5px gray;
  height: ${({ height }) => height}vh;
  width: ${({ height }) => 5 * height / 8}vh;
`;

const StyledIcon = styled(Icon)`
  width: 100%;
  height: 100%;
`;

type ColorsIconTypesMapping = {
  [key in Color]: IconType;
};

const colorIconTypeMapping: ColorsIconTypesMapping = {
  [Color.Clubs]: IconType.ColorClubs,
  [Color.Diamonds]: IconType.ColorDiamonds,
  [Color.Hearts]: IconType.ColorHearts,
  [Color.Spades]: IconType.ColorSpades
};

type rankSymbolMappings = {
  [key in Rank]: string;
};

const rankSymbolMappings = {
  [Rank.Ace]: "A",
  [Rank.Jack]: "J",
  [Rank.King]: "K",
  [Rank.Nine]: "9",
  [Rank.Queen]: "Q",
  [Rank.Ten]: "10"
};

interface IProps {
  color: Color;
  rank: Rank;
  height?: number;
}

export const Card: React.FC<IProps> = ({ color, rank, height = 60 }) => {
  const ColorIcon: React.FC<{}> = useMemo(
    () => () => (
      <StyledIcon iconType={colorIconTypeMapping[color]} alt="Color Icon" />
    ),
    [color]
  );

  return (
    <CardDiv height={height}>
      {rankSymbolMappings[rank]}
      <ColorIcon />
    </CardDiv>
  );
};
