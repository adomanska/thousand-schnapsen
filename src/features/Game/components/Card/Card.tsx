import React, { useMemo } from "react";
import styled from "styled-components";
import { Icon, IconType } from "../../../../components/Icon/Icon";
import {
  colorsIconTypesMapping,
  ranksColorsIconTypesMapping,
  ranksSymbolsMapping,
} from "./Card.utils";
import {
  CardDiv,
  CardBack,
  CardColumn,
  SideColumn,
  RankSpan,
} from "./components";
import { Color } from "../../models/Color";
import { Rank } from "../../models/Rank";

const MiddleColumn = styled(CardColumn)`
  justify-content: center;
`;

const StyledIcon = styled(Icon)`
  width: 100%;
  height: auto;
`;

interface CardProps {
  suit: Color;
  rank: Rank;
  size?: "small" | "medium" | "large";
  className?: string;
  onClick?: () => void;
  revealed?: boolean;
}

export const Card: React.FC<CardProps> = ({
  suit,
  rank,
  className,
  onClick,
  revealed = true,
  size = "small",
}) => {
  const ColorIcon: React.FC = useMemo(
    () => () => (
      <StyledIcon iconType={colorsIconTypesMapping[suit]} alt="Suit Icon" />
    ),
    [suit]
  );

  const RankIcon: React.FC = useMemo(
    () => () => (
      <StyledIcon
        iconType={ranksColorsIconTypesMapping[rank][suit]}
        alt="Rank Icon"
      />
    ),
    [rank, suit]
  );

  return (
    <CardDiv size={size} className={className} onClick={onClick}>
      {revealed ? (
        <>
          <SideColumn width={20} size={size}>
            <RankSpan size={size}>{ranksSymbolsMapping[rank]}</RankSpan>
            <ColorIcon />
          </SideColumn>
          <MiddleColumn width={60}>
            <RankIcon />
          </MiddleColumn>
          <SideColumn width={20} rotation={0.5} size={size}>
            <RankSpan size={size}>{ranksSymbolsMapping[rank]}</RankSpan>
            <ColorIcon />
          </SideColumn>
        </>
      ) : (
        <CardBack iconType={IconType.CardBack} alt="Card Back" size={size} />
      )}
    </CardDiv>
  );
};
