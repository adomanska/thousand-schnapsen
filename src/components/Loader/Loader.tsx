import React from "react";
import styled from "styled-components";
import { Backdrop, CircularProgress } from "@material-ui/core";

const StyledBackdrop = styled(Backdrop)`
  z-index: 100;
`;

interface LoaderProps {
  open: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ open }) => (
  <StyledBackdrop open={open}>
    <CircularProgress />
  </StyledBackdrop>
);
