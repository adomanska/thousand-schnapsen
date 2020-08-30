import { useState, useCallback, useMemo } from "react";
import { PlayersSetup } from "../../../models/PlayersSetup";
import Axios from "axios";
import { useServiceDataContext } from "../../../utils/context";

export const useInitNewGame = () => {
  const { apiUrl } = useServiceDataContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const initNewGame = useCallback(
    (data: PlayersSetup) => {
      setIsLoading(true);
      const url = `${apiUrl}/game`;
      Axios.post(url, data)
        .then(() => setIsLoading(false))
        .catch(() => {
          setIsError(true);
          setIsLoading(false);
        });
    },
    [setIsLoading, apiUrl, setIsError]
  );

  const closeError = useCallback(() => setIsError(false), [setIsError]);

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
