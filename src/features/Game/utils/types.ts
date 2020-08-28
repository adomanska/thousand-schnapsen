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

export interface ICard {
  rank: Rank;
  color: Color;
}

export type Size = "small" | "medium" | "large";