import { useCallback, useMemo } from "react";
import { GameSetup } from "../../../models/GameSetup";
import { useAxiosRequest } from "../../../utils/useAxiosRequest";

export const useInitNewGame = () => {
  const { makeRequest, ...rest } = useAxiosRequest("game", "post");

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
