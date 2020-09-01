import { useState, useMemo } from "react";
import io from "socket.io-client";
import { GameState } from "../../../models/GameState";
import { useServiceDataContext } from "../../../utils/context";

export const useData = (initialData: GameState) => {
  const { apiUrl } = useServiceDataContext();
  const [data, setData] = useState<GameState>(initialData);

  const socket = useMemo(() => io(apiUrl), [apiUrl]);
  socket.on("game_state_update", setData);

  return data;
};
