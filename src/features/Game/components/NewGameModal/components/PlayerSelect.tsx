import React, { useCallback, useMemo } from "react";
import { PlayerType } from "../../../models/PlayerType";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import styled from "styled-components";

const ExtendedMenuItem = styled(MenuItem)<{ disabled?: boolean }>`
  ${({ disabled }) => disabled && "display: none;"}
`;

const playerTypeOptions = [
  { value: PlayerType.Human, label: "Me" },
  { value: PlayerType.DeepCFR, label: "Deep CFR" },
  { value: PlayerType.Random, label: "Random" },
];

interface PlayerSelectProps {
  value?: PlayerType;
  onChange: (value: PlayerType) => void;
  label: string;
  error?: string;
  isHumanAssigned: boolean;
  onTouch: () => void;
}

export const PlayerSelect: React.FC<PlayerSelectProps> = ({
  value,
  onChange,
  label,
  error,
  isHumanAssigned,
  onTouch,
}) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) =>
      onChange(event.target.value as PlayerType),
    [onChange]
  );

  const options = useMemo(
    () =>
      playerTypeOptions.map((option) => (
        <ExtendedMenuItem
          key={option.value}
          value={option.value}
          disabled={
            isHumanAssigned && option.value === PlayerType.Human && value !== PlayerType.Human
          }
        >
          {option.label}
        </ExtendedMenuItem>
      )),
    [isHumanAssigned, value]
  );

  return (
    <FormControl error={error !== undefined}>
      <InputLabel>{label}</InputLabel>
      <Select value={value || ""} onChange={handleChange} onClick={onTouch}>
        {options}
      </Select>
      <FormHelperText>{error || " "}</FormHelperText>
    </FormControl>
  );
};
