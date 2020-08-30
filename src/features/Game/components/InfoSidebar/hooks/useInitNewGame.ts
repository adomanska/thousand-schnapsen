import { useState, useCallback, useMemo } from "react";
import { PlayersSetup } from "../../../models/PlayersSetup";
import Axios from "axios";
import { url } from "inspector";

export const useInitNewGame = () => {
  const apiUrl = "http://sample-url.com"; // TODO: Fetch url from context
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const initNewGame = useCallback((data: PlayersSetup) => {
    setIsLoading(true);
    Axios.post(apiUrl, data)
      .then(() => setIsLoading(false))
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      })
  }, [setIsLoading, apiUrl, setIsError]);

  const closeError = useCallback(() => 
    setIsError(false),
    [setIsError]
  );

  return useMemo(() => ({
    initNewGame,
    isLoading,
    isError,
    closeError
  }), [initNewGame, isLoading, isError, closeError]);
};