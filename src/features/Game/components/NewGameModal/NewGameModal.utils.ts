import { GameSetup } from "../../models/GameSetup";
import { PlayerType } from "../../models/PlayerType";
import { Touched } from "../../utils/types";

type FormValues = GameSetup['playerTypes'];

export const isFormValid = (
  values: Partial<FormValues>,
  setError: (message: string) => void
): values is FormValues => {
  if (values.some((value) => !value)) {
    setError("Please set all players");
    return false;
  }
  if (values.some((value) => value === PlayerType.Human)) {
    return true;
  }
  setError("You have to assign exactly one human player");
  return false;
};

export const initialFormValues: Partial<FormValues> = [
  undefined,
  undefined,
  undefined
];

export const initialTouched: Touched<FormValues> = [
  undefined,
  undefined,
  undefined
]
