import { useCallback, useMemo } from "react";
import { PlayersSetup } from "../../../models/PlayersSetup";
import { useAxiosRequest } from "../../../utils/useAxiosRequest";

export const useInitNewGame = () => {
  const { makeRequest, isLoading, isError, closeError } = useAxiosRequest("game", "POST");

  const initNewGame = useCallback((data: PlayersSetup) => 
    makeRequest(data),
    [makeRequest]
  );

  return useMemo(
    () => ({
      initNewGame,
      isLoading,
      isError,
      closeError,
    }),
    [initNewGame, isLoading, isError, closeError]
  );
};
