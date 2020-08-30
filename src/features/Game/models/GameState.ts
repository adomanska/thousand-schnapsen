import { Card } from "./Card";
import { Color } from "./Color";

export interface GameState {
  stack: Card[];
  hand: Card[];
  availableActions?: Card[];
  nextPlayerId: number;
  playerId: number;
  playerNames: string[];
  points: number[];
  usedMarriages: Color[];
  activeMarriage?: Color;
  gameOver: boolean;
}

export const defaultGameState: GameState  = {
  stack: [],
  hand: [],
  nextPlayerId: 0,
  playerId: 0,
  playerNames: ['-', '-', '-'],
  points: [0, 0, 0],
  usedMarriages: [],
  gameOver: false
};
