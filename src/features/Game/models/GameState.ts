import { Card } from "./Card";
import { Color } from "./Color";

export interface GameState {
  stack: Card[];
  hand: Card[];
  nextPlayerId: number;
  playerId: number;
  playerNames: string[];
  points: number[];
  usedMarriages: Color[];
  activeMarriage?: Color;
  gameOver: boolean;
}
