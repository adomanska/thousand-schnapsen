import { IconType } from "../../../../components/Icon/Icon";
import { Color } from "../../models/Color";

export const marriages = [
  Color.Spades,
  Color.Clubs,
  Color.Diamonds,
  Color.Hearts,
];

export const marriageIconMappings = {
  [Color.Spades]: IconType.ColorSpades,
  [Color.Clubs]: IconType.ColorClubs,
  [Color.Diamonds]: IconType.ColorDiamonds,
  [Color.Hearts]: IconType.ColorHearts,
};
