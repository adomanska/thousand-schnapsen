import { Rank } from "./types";

export const RankValueMap: {[key: string]: number} = {
  [Rank.Nine]: 0,
  [Rank.Jack]: 2,
  [Rank.Queen]: 3,
  [Rank.King]: 4,
  [Rank.Ten]: 10,
  [Rank.Ace]: 11
};
