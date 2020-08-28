import React, { useCallback } from "react";
import { Color } from "../../utils/types";
import styled from "styled-components";
import { Icon, IconType } from "../../../../components/Icon/Icon";

interface IMarriageProps {
    active: boolean;
    selected: boolean;
}

const Marriage = styled(Icon)<IMarriageProps>`
    width: 21%;
    opacity: ${({ active }) => active ? 100 : 15}%;
    ${({ selected }) => selected && "background: lightblue;"}
    border-radius: 10%;
    padding: 2%;
`;

const MainDiv = styled.div`
    display: flex;
`;

const marriages = [
    Color.Spades, 
    Color.Clubs, 
    Color.Diamonds,
    Color.Hearts
];

const marriageIconMappings = {
    [Color.Spades]: IconType.ColorSpades,
    [Color.Clubs]: IconType.ColorClubs,
    [Color.Diamonds]: IconType.ColorDiamonds,
    [Color.Hearts]: IconType.ColorHearts,
}

interface IMarriagesProps {
    usedMariages: Color[];
    activeMarriage?: Color;
}

export const Marriages: React.FC<IMarriagesProps> = ({ usedMariages, activeMarriage }) => {
    const isActive = useCallback((marriage: Color) =>
        usedMariages.includes(marriage),
        [usedMariages]
    );

    const isSelected = useCallback((marriage: Color) =>
        activeMarriage === marriage,
        [activeMarriage]
    );
    
    return (
        <MainDiv>
            {marriages.map(marriage => (
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