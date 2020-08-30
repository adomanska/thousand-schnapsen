import { GameState } from "../models/GameState";
import { Rank } from "../models/Rank";
import { Color } from "../models/Color";

export const mockGameState: GameState = {
  playerId: 1,
  nextPlayerId: 1,
  playerNames: ["Opponent1", "Me", "Opponent2"],
  stack: [
    { rank: Rank.Queen, color: Color.Clubs },
    { rank: Rank.Jack, color: Color.Diamonds },
  ],
  hand: [
    { rank: Rank.Jack, color: Color.Spades },
    { rank: Rank.Nine, color: Color.Clubs },
    { rank: Rank.King, color: Color.Clubs },
    { rank: Rank.Ace, color: Color.Clubs },
    { rank: Rank.Queen, color: Color.Diamonds },
    { rank: Rank.King, color: Color.Diamonds },
    { rank: Rank.Ten, color: Color.Hearts },
    { rank: Rank.Ace, color: Color.Hearts },
  ],
  availableActions: [
    { rank: Rank.King, color: Color.Clubs },
    { rank: Rank.Ace, color: Color.Clubs },
    { rank: Rank.King, color: Color.Diamonds },
  ],
  points: [
      40, 120, 60
  ],
  usedMarriages: [Color.Diamonds, Color.Spades],
  activeMarriage: Color.Diamonds,
  gameOver: false,
};