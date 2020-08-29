import React, { useCallback } from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/Icon/Icon";
import { marriages, marriageIconMappings } from "./Marriages.utils";
import { Color } from "../../models/Color";

interface MarriageProps {
  active: boolean;
  selected: boolean;
}

const Marriage = styled(Icon)<MarriageProps>`
  width: 15%;
  opacity: ${({ active }) => (active ? 100 : 15)}%;
  ${({ selected }) => selected && "background: #3f51b5;"}
  border-radius: 10%;
  padding: 5%;
`;

const MainDiv = styled.div`
  display: flex;
`;

interface MarriagesProps {
  usedMariages: Color[];
  activeMarriage?: Color;
}

export const Marriages: React.FC<MarriagesProps> = ({
  usedMariages,
  activeMarriage,
}) => {
  const isActive = useCallback(
    (marriage: Color) => usedMariages.includes(marriage),
    [usedMariages]
  );

  const isSelected = useCallback(
    (marriage: Color) => activeMarriage === marriage,
    [activeMarriage]
  );

  return (
    <MainDiv>
      {marriages.map((marriage) => (
        <Marriage
          key={marriage}
          active={isActive(marriage)}
          selected={isSelected(marriage)}
          iconType={marriageIconMappings[marriage]}
          alt={marriage.toString()}
        />
      ))}
    </MainDiv>
  );
};
