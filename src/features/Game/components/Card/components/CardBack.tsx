import styled from "styled-components";
import { Size } from "../Card.types";
import { Icon } from "../../../../../components/Icon/Icon";

const sizePaddingMappings = {
    "small": "0.5rem",
    "medium": "0.75rem",
    "large": "1rem",
}

interface IProps {
    size: Size;
}

export const CardBack = styled(Icon)<IProps>`
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: ${({size}) => sizePaddingMappings[size]};
`;