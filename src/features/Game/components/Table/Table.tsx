import React from "react";
import styled from "styled-components";

const TableDiv = styled.div`
  border-radius: 11rem;
  background: #3f51b5;
  padding: 2rem;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 1rem 1rem gray;
  align-items: center;
  width: 100%;
`;

export const Table: React.FC = ({ children }) => (
  <TableDiv>{children}</TableDiv>
);
