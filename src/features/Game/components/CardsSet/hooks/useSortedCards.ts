import { Card } from "../../../models/Card";
import { useMemo } from "react";
import { Color } from "../../../models/Color";
import { Rank } from "../../../models/Rank";

const CARDS_PER_SUIT = 6;

const suitValue = {
  [Color.Spades]: 0,
  [Color.Clubs]: 1,
  [Color.Diamonds]: 2,
  [Color.Hearts]: 3,
};

const rankValue = {
  [Rank.Nine]: 0,
  [Rank.Jack]: 1,
  [Rank.Queen]: 2,
  [Rank.King]: 3,
  [Rank.Ten]: 4,
  [Rank.Ace]: 5,
};

const getCardValue = ({ suit, rank }: Card) =>
  suitValue[suit] * CARDS_PER_SUIT + rankValue[rank];

const cardsComparer = (cardA: Card, cardB: Card) => {
  const valueA = getCardValue(cardA);
  const valueB = getCardValue(cardB);

  return valueA - valueB;
};

export const useSortedCards = (cards: Card[]) =>
  useMemo(() => cards.sort(cardsComparer), [cards]);
