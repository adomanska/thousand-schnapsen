import { PlayersSetup } from "../../models/PlayersSetup";
import { PlayerType } from "../../models/PlayerType";

export type PlayersSetupTouched = {
  [key in keyof PlayersSetup]: boolean;
}

export const isFormValid = (values: Partial<PlayersSetup>, setError: (message: string) => void): values is PlayersSetup => {
  if (Object.values(values).some(value => !value)) {
    setError("Please set all players");
    return false;
  }
  if (Object.values(values).some(value => value === PlayerType.Human)) {
    return true;
  }
  setError("You have to assign exactly one human player");
  return false;
};

export const initialPlayersSetup = {
  0: undefined,
  1: undefined,
  2: undefined
};
