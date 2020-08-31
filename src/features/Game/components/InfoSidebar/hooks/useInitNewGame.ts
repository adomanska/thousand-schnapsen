import { useCallback, useMemo } from "react";
import { GameSetup } from "../../../models/GameSetup";
import { useAxiosRequest } from "../../../utils/useAxiosRequest";
import { GameState } from "../../../models/GameState";

export const useInitNewGame = (updateData: (data: GameState) => void) => {
  const { makeRequest, ...rest } = useAxiosRequest("game", "post", updateData);

  const initNewGame = useCallback((data: GameSetup) => makeRequest(data), [
    makeRequest,
  ]);

  return useMemo(
    () => ({
      initNewGame,
      ...rest,
    }),
    [initNewGame, rest]
  );
};
