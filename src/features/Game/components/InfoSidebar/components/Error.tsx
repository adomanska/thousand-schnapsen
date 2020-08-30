import React from "react";
import Alert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";

interface ErrorProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

export const Error: React.FC<ErrorProps> = ({ open, message, onClose }) => (
  <Snackbar open={open}>
    <Alert severity="error" onClose={onClose} elevation={6} variant="filled">
      {message}
    </Alert>
  </Snackbar>
);
