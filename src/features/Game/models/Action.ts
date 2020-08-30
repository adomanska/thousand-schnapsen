import { Card } from "./Card";

export interface Action {
  playerId: number;
  card: Card;
}
