import styled from "styled-components";

export const sizeHeightMappings = {
    "small": "8rem",
    "medium": "12rem",
    "large": "16rem",
}

export const sizeWidthMappings = {
    "small": "5rem",
    "medium": "7.5rem",
    "large": "10rem",
}

export const sizeRadiusMappings = {
    "small": "0.5rem",
    "medium": "0.75rem",
    "large": "1rem",
}

interface ICardDiv {
    size: "small" | "medium" | "large";
}
  
export const CardDiv = styled.div<ICardDiv>`
    background: white;
    border-radius: ${({size}) => sizeRadiusMappings[size]};
    box-shadow: 0 0 10px 5px gray;
    height: ${({size}) => sizeHeightMappings[size]};
    width: ${({size}) => sizeWidthMappings[size]};

    &:after {
        content: "";
        display: table;
        clear: both;
    }

    &:hover {
        box-shadow: 0 0 10px 5px lightblue;
    }
`;