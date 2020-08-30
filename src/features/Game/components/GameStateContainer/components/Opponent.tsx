import React, { useMemo } from "react";
import styled from "styled-components";

interface NameSpanProps {
  active: boolean;
}

const NameSpan = styled.span<NameSpanProps>`
  ${({ active }) => active && "color: #f50057; font-weight: bold;"}
`;

interface OpponentProps {
  playerId: number;
  nextPlayerId: number;
  playerNames: string[];
}

export const Opponent: React.FC<OpponentProps> = ({
  playerId,
  nextPlayerId,
  playerNames,
}) => {
  const active = useMemo(() => playerId === nextPlayerId, [
    playerId,
    nextPlayerId,
  ]);

  const playerName = useMemo(() => playerNames[playerId], [
    playerNames,
    playerId,
  ]);

  return <NameSpan active={active}>{playerName}</NameSpan>;
};
