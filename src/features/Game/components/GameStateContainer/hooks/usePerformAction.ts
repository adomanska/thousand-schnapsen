import { useCallback, useMemo } from "react";
import { useAxiosRequest } from "../../../utils/useAxiosRequest";
import { Action } from "../../../models/Action";

export const usePerformAction = () => {
  const { makeRequest, ...rest } = useAxiosRequest("game", "put");

  const performAction = useCallback((data: Action) => 
    makeRequest(data),
    [makeRequest]
  );

  return useMemo(
    () => ({
      performAction,
      ...rest
    }),
    [performAction, rest]
  );
};
