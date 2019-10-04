import React from "react";
import { Color, Rank } from "./types";

interface IProps {
  color: Color;
  rank: Rank;
}

export const Card: React.FC<IProps> = ({color, rank}) => (
  <div>
    {`${color}: ${rank}`}
  </div>
);
