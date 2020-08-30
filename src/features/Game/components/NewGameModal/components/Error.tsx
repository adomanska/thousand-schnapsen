import React from "react";
import { FormHelperText } from "@material-ui/core";

interface ErrorProps {
  message?: string;
}

export const Error: React.FC<ErrorProps> = ({ message }) => (
  <FormHelperText error={true}>{message || " "}</FormHelperText>
);
