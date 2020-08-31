import { GameState } from "../models/GameState";
import { Rank } from "../models/Rank";
import { Color } from "../models/Color";

export const mockGameState: GameState = {
  playerId: 1,
  nextPlayerId: 1,
  playerNames: ["Opponent1", "Me", "Opponent2"],
  stack: [
    { rank: Rank.Queen, suit: Color.Clubs },
    { rank: Rank.Jack, suit: Color.Diamonds },
  ],
  hand: [
    { rank: Rank.Jack, suit: Color.Spades },
    { rank: Rank.Nine, suit: Color.Clubs },
    { rank: Rank.King, suit: Color.Clubs },
    { rank: Rank.Ace, suit: Color.Clubs },
    { rank: Rank.Queen, suit: Color.Diamonds },
    { rank: Rank.King, suit: Color.Diamonds },
    { rank: Rank.Ten, suit: Color.Hearts },
    { rank: Rank.Ace, suit: Color.Hearts },
  ],
  availableActions: [
    { rank: Rank.King, suit: Color.Clubs },
    { rank: Rank.Ace, suit: Color.Clubs },
    { rank: Rank.King, suit: Color.Diamonds },
  ],
  points: [40, 120, 60],
  usedMarriages: [Color.Diamonds, Color.Spades],
  activeMarriage: Color.Diamonds,
  gameOver: false,
};
