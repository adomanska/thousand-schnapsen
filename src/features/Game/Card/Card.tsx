import React, { useMemo } from "react";
import styled from "styled-components";
import { Icon, IconType } from "../../../components/Icon/Icon";
import { Color, Rank } from "./types";

const CardDiv = styled.div`
  background: white;
  border-radius: 3vh;
  border: 1px solid black;
  height: 40vh;
  width: 25vh;
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
}

export const Card: React.FC<IProps> = ({ color, rank }) => {
  const ColorIcon: React.FC<{}> = useMemo(
    () => () => (
      <StyledIcon iconType={colorIconTypeMapping[color]} alt="Color Icon" />
    ),
    [color]
  );

  return (
    <CardDiv>
      {rankSymbolMappings[rank]}
      <ColorIcon />
    </CardDiv>
  );
};
