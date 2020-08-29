import React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

interface PointsProps {
  playerNames: string[];
  points: number[];
}

export const Points: React.FC<PointsProps> = ({ playerNames, points }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          {playerNames.map((playerName) => (
            <TableCell key={playerName} align="right">
              <b>{playerName}</b>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          {points.map((playerPoints) => (
            <TableCell key={playerPoints} align="right">
              {playerPoints}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
