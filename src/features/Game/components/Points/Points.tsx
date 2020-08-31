import React from "react";
import {
  TableContainer,
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
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          {playerNames.map((playerName, index) => (
            <TableCell key={index} align="right">
              <b>{playerName}</b>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          {points.map((playerPoints, index) => (
            <TableCell key={index} align="right">
              {playerPoints}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
