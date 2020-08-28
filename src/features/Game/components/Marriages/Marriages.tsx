import React, { useCallback } from "react";
import { Color } from "../../utils/types";
import styled from "styled-components";
import { Icon } from "../../../../components/Icon/Icon";
import { marriages, marriageIconMappings } from "./Marriages.utils";

interface IMarriageProps {
  active: boolean;
  selected: boolean;
}

const Marriage = styled(Icon)<IMarriageProps>`
  width: 21%;
  opacity: ${({ active }) => (active ? 100 : 15)}%;
  ${({ selected }) => selected && "background: lightblue;"}
  border-radius: 10%;
  padding: 2%;
`;

const MainDiv = styled.div`
  display: flex;
`;

interface IMarriagesProps {
  usedMariages: Color[];
  activeMarriage?: Color;
}

export const Marriages: React.FC<IMarriagesProps> = ({
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
