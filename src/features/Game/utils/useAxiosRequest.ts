import Axios, { Method, AxiosRequestConfig } from "axios";
import { useServiceDataContext } from "./context";
import { useState, useCallback, useMemo } from "react";

export const useAxiosRequest = (
  url: string,
  method: Method,
  onSuccess?: (data?: any) => void
) => {
  const { apiUrl } = useServiceDataContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const makeRequest = useCallback(
    (data?: unknown) => {
      setIsLoading(true);
      const completeUrl = `${apiUrl}/${url}`;
      const config: AxiosRequestConfig = {
        url: completeUrl,
        baseURL: apiUrl,
        headers: { "content-type": "application/json" },
        method,
        data,
      };
      Axios.request(config)
        .then((response) => {
          if (onSuccess) {
            onSuccess(response.data);
          }
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
          setIsLoading(false);
        });
    },
    [setIsLoading, apiUrl, url, setIsError, method, onSuccess]
  );

  const closeError = useCallback(() => setIsError(false), [setIsError]);

  return useMemo(
    () => ({
      makeRequest,
      isLoading,
      isError,
      closeError,
    }),
    [makeRequest, isLoading, isError, closeError]
  );
};
