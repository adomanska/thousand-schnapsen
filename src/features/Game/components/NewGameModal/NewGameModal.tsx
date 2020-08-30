import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, DialogContentText } from "@material-ui/core";
import { PlayersSetup } from "../../models/PlayersSetup";
import { PlayerSelect } from "./components";
import { PlayerType } from "../../models/PlayerType";
import styled from "styled-components";

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.5rem;

  & > * {
    margin-top: 0.5rem;
  }
`; 

type PlayersSetupTouched = {
  [key in keyof PlayersSetup]: boolean;
}

interface NewGameModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export const NewGameModal: React.FC<NewGameModalProps> = ({open, onClose, onSubmit}) => {
  const [formValues, setFormValues] = useState<Partial<PlayersSetup>>({});
  const [touched, setTouched] = useState<Partial<PlayersSetupTouched>>({});

  const onFieldChange = useCallback((index: number) => (value: PlayerType) => 
    setFormValues({
      ...formValues,
      [index]: value
    }),
    [setFormValues, formValues]
  );

  const onFieldTouched = useCallback((index: number) => () => 
    setTouched({
      ...touched,
      [index]: true
    }),
    [setTouched, touched]
  );

  const isHumanAssigned = useMemo(() =>
    Object.values(formValues).includes(PlayerType.Human),
    [formValues]
  );

  useEffect(() => {
    if(open) {
      setFormValues({});
      setTouched({});
    }
  }, [open])

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Initialize new game?</DialogTitle>
      <DialogContent>
        <DialogContentText>
            To intialize new game, please set up players. 
            You need to choose, what algorithms will be your opponents. 
            What is more, you need to assign yourself to exactly one sit.
        </DialogContentText>
        <FormDiv>
          {[0, 1, 2].map(index => (
            <PlayerSelect
              key={index}
              value={formValues[index]}
              label={`Player #${index + 1}`}
              onChange={onFieldChange(index)}
              onTouch={onFieldTouched(index)}
              isHumanAssigned={isHumanAssigned}
            />
          ))}
        </FormDiv>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="primary">
          Initialize
        </Button>
      </DialogActions>
    </Dialog>
  )
};
