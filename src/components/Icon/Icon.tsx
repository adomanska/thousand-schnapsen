import React from "react";
import ColorClubs from "../../assets/icons/color-clubs.svg";
import ColorDiamonds from "../../assets/icons/color-diamonds.svg";
import ColorHearts from "../../assets/icons/color-hearts.svg";
import ColorSpades from "../../assets/icons/color-spades.svg";
import JackBlack from "../../assets/icons/jack-black.svg";
import JackRed from "../../assets/icons/jack-red.svg";
import KingBlack from "../../assets/icons/king-black.svg";
import KingRed from "../../assets/icons/king-red.svg";
import NineClubs from "../../assets/icons/nine-clubs.svg";
import NineDiamonds from "../../assets/icons/nine-diamonds.svg";
import NineHearts from "../../assets/icons/nine-hearts.svg";
import NineSpades from "../../assets/icons/nine-spades.svg";
import QueenBlack from "../../assets/icons/queen-black.svg";
import QueenRed from "../../assets/icons/queen-red.svg";
import TenClubs from "../../assets/icons/ten-clubs.svg";
import TenDiamonds from "../../assets/icons/ten-diamonds.svg";
import TenHearts from "../../assets/icons/ten-hearts.svg";
import TenSpades from "../../assets/icons/ten-spades.svg";

export enum IconType {
  ColorClubs = "COLOR_CLUBS",
  ColorDiamonds = "COLOR_DIAMONDS",
  ColorHearts = "COLOR_HEARTS",
  ColorSpades = "COLOR_SPADES",
  JackBlack = "JACK_BLACK",
  JackRed = "JACK_RED",
  KingBlack = "KING_BLACK",
  KingRed = "KING_RED",
  QueenBlack = "QUEEN_BLACK",
  QueenRed = "QUEEN_RED",
  NineClubs = "NINE_CLUBS",
  NineDiamonds = "NINE_DIAMONDS",
  NineHearts = "NINE_HEARTS",
  NineSpades = "NINE_SPADES",
  TenClubs = "TEN_CLUBS",
  TenDiamonds = "TEN_DIAMONDS",
  TenHearts = "TEN_HEARTS",
  TenSpades = "TEN_SPADES"
}

type IconsTypesMappings = { [key in IconType]: string };

const iconsTypesMappings: IconsTypesMappings = {
  [IconType.ColorClubs]: ColorClubs,
  [IconType.ColorDiamonds]: ColorDiamonds,
  [IconType.ColorHearts]: ColorHearts,
  [IconType.ColorSpades]: ColorSpades,
  [IconType.JackBlack]: JackBlack,
  [IconType.JackRed]: JackRed,
  [IconType.KingBlack]: KingBlack,
  [IconType.KingRed]: KingRed,
  [IconType.QueenBlack]: QueenBlack,
  [IconType.QueenRed]: QueenRed,
  [IconType.NineClubs]: NineClubs,
  [IconType.NineDiamonds]: NineDiamonds,
  [IconType.NineHearts]: NineHearts,
  [IconType.NineSpades]: NineSpades,
  [IconType.TenClubs]: TenClubs,
  [IconType.TenDiamonds]: TenDiamonds,
  [IconType.TenHearts]: TenHearts,
  [IconType.TenSpades]: TenSpades
};

interface IProps {
  iconType: IconType;
  alt: string;
  className?: string;
}

export const Icon: React.FC<IProps> = ({ iconType, alt, className }) => (
  <img src={iconsTypesMappings[iconType]} alt={alt} className={className} />
);
