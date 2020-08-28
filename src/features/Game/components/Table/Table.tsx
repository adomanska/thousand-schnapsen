import React from "react";
import styled from "styled-components";

const TableDiv = styled.div`
  border-radius: 11rem;
  background: darkgreen;
  padding: 10rem;
  height: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 1rem 1rem gray;
`;

export const Table: React.FC = ({ children }) => (
  <TableDiv>{children}</TableDiv>
);
