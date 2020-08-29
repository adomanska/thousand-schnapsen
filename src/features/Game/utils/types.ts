export enum Color {
  Spades,
  Clubs,
  Diamonds,
  Hearts,
}

export enum Rank {
  Nine,
  Jack,
  Queen,
  King,
  Ten,
  Ace,
}

export interface CardFE {
  rank: Rank;
  color: Color;
}

export type Size = "small" | "medium" | "large";
