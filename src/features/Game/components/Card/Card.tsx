import React, { useMemo } from "react";
import styled from "styled-components";
import { Icon, IconType } from "../../../../components/Icon/Icon";
import {
  colorsIconTypesMapping,
  ranksColorsIconTypesMapping,
  ranksSymbolsMapping,
} from "./Card.mappings";
import { Color, Rank } from "../../utils/types";
import {
  CardDiv,
  CardBack,
  CardColumn,
  SideColumn,
  RankSpan,
} from "./components";

const MiddleColumn = styled(CardColumn)`
  justify-content: center;
`;

const StyledIcon = styled(Icon)`
  width: 100%;
  height: auto;
`;

interface IProps {
  color: Color;
  rank: Rank;
  size?: "small" | "medium" | "large";
  className?: string;
  onClick?: () => void;
  revealed?: boolean;
}

export const Card: React.FC<IProps> = ({
  color,
  rank,
  className,
  onClick,
  revealed = true,
  size = "small",
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
