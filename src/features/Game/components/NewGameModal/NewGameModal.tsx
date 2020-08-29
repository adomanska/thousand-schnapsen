import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, DialogContentText } from "@material-ui/core";



interface NewGameModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export const NewGameModal: React.FC<NewGameModalProps> = ({open, onClose, onSubmit}) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Initialize new game?</DialogTitle>
      <DialogContent>
        <DialogContentText>
            To intialize new game, please set up players. 
            You need to choose, what algorithms will be your opponents. 
            What is more, you need to assign yourself to exactly one sit.
        </DialogContentText>
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
