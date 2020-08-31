import { GameSetup } from "../../models/GameSetup";
import { PlayerType } from "../../models/PlayerType";

export const isFormValid = (
  values: Partial<GameSetup>,
  setError: (message: string) => void
): values is GameSetup => {
  if (Object.values(values).some((value) => !value)) {
    setError("Please set all players");
    return false;
  }
  if (Object.values(values).some((value) => value === PlayerType.Human)) {
    return true;
  }
  setError("You have to assign exactly one human player");
  return false;
};

export const initialPlayersSetup = {
  0: undefined,
  1: undefined,
  2: undefined,
};
