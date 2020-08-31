import React, { useState, useCallback, useMemo, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
} from "@material-ui/core";
import { GameSetup } from "../../models/GameSetup";
import { PlayerSelect, Error } from "./components";
import { PlayerType } from "../../models/PlayerType";
import styled from "styled-components";
import {
  isFormValid,
  initialFormValues,
  initialTouched,
} from "./NewGameModal.utils";
import { Touched } from "../../utils/types";

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.5rem;

  & > * {
    margin-top: 0.5rem;
  }
`;

type FormValues = GameSetup["playerTypes"];

interface NewGameModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: GameSetup) => void;
}

export const NewGameModal: React.FC<NewGameModalProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [formValues, setFormValues] = useState<Partial<FormValues>>(
    initialFormValues
  );
  const [touched, setTouched] = useState<Touched<FormValues>>(initialTouched);
  const [error, setError] = useState<string>();

  const onFieldChange = useCallback(
    (index: number) => (value: PlayerType) =>
      setFormValues([
        ...formValues.slice(0, index),
        value,
        ...formValues.slice(index + 1),
      ]),
    [setFormValues, formValues]
  );

  const onFieldTouched = useCallback(
    (index: number) => () =>
      setTouched([
        ...touched.slice(0, index),
        true,
        ...touched.slice(index + 1),
      ]),
    [setTouched, touched]
  );

  const isHumanAssigned = useMemo(
    () => Object.values(formValues).includes(PlayerType.Human),
    [formValues]
  );

  const getError = useCallback(
    (index: number) =>
      touched[index] && !formValues[index]
        ? "Please select player type"
        : undefined,
    [touched, formValues]
  );

  const handleSubmit = useCallback(() => {
    if (isFormValid(formValues, setError)) {
      onSubmit({ playerTypes: formValues });
    }
  }, [formValues, setError, onSubmit]);

  useEffect(() => {
    if (open) {
      setFormValues(initialFormValues);
      setTouched(initialTouched);
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Initialize new game?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To intialize new game, please set up players. You need to choose, what
          algorithms will be your opponents. What is more, you need to assign
          yourself to exactly one sit.
        </DialogContentText>
        <FormDiv>
          {[0, 1, 2].map((index) => (
            <PlayerSelect
              key={index}
              value={formValues[index]}
              label={`Player #${index + 1}`}
              onChange={onFieldChange(index)}
              onTouch={onFieldTouched(index)}
              isHumanAssigned={isHumanAssigned}
              error={getError(index)}
            />
          ))}
        </FormDiv>
        <Error message={error} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Initialize
        </Button>
      </DialogActions>
    </Dialog>
  );
};
