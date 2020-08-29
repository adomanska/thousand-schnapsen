import { IconType } from "../../../../components/Icon/Icon";
import { Color } from "../../models/Color";
import { Rank } from "../../models/Rank";

export const colorsIconTypesMapping = {
  [Color.Clubs]: IconType.ColorClubs,
  [Color.Diamonds]: IconType.ColorDiamonds,
  [Color.Hearts]: IconType.ColorHearts,
  [Color.Spades]: IconType.ColorSpades,
};

export const ranksSymbolsMapping = {
  [Rank.Ace]: "A",
  [Rank.Jack]: "J",
  [Rank.King]: "K",
  [Rank.Nine]: "9",
  [Rank.Queen]: "Q",
  [Rank.Ten]: "10",
};

export const ranksColorsIconTypesMapping = {
  [Rank.Ace]: {
    [Color.Clubs]: IconType.ColorClubs,
    [Color.Diamonds]: IconType.ColorDiamonds,
    [Color.Hearts]: IconType.ColorHearts,
    [Color.Spades]: IconType.ColorSpades,
  },
  [Rank.Jack]: {
    [Color.Clubs]: IconType.JackBlack,
    [Color.Diamonds]: IconType.JackRed,
    [Color.Hearts]: IconType.JackRed,
    [Color.Spades]: IconType.JackBlack,
  },
  [Rank.King]: {
    [Color.Clubs]: IconType.KingBlack,
    [Color.Diamonds]: IconType.KingRed,
    [Color.Hearts]: IconType.KingRed,
    [Color.Spades]: IconType.KingBlack,
  },
  [Rank.Nine]: {
    [Color.Clubs]: IconType.NineClubs,
    [Color.Diamonds]: IconType.NineDiamonds,
    [Color.Hearts]: IconType.NineHearts,
    [Color.Spades]: IconType.NineSpades,
  },
  [Rank.Queen]: {
    [Color.Clubs]: IconType.QueenBlack,
    [Color.Diamonds]: IconType.QueenRed,
    [Color.Hearts]: IconType.QueenRed,
    [Color.Spades]: IconType.QueenBlack,
  },
  [Rank.Ten]: {
    [Color.Clubs]: IconType.TenClubs,
    [Color.Diamonds]: IconType.TenDiamonds,
    [Color.Hearts]: IconType.TenHearts,
    [Color.Spades]: IconType.TenSpades,
  },
};
