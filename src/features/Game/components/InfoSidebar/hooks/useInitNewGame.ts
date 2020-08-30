import { useCallback, useMemo } from "react";
import { PlayersSetup } from "../../../models/PlayersSetup";
import { useAxiosRequest } from "../../../utils/useAxiosRequest";

export const useInitNewGame = () => {
  const { makeRequest, ...rest } = useAxiosRequest("game", "post");

  const initNewGame = useCallback((data: PlayersSetup) => makeRequest(data), [
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
