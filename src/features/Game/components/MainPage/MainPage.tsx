import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { GamesSharp } from "@material-ui/icons";
import styled from "styled-components";
import { InfoSideBar } from "../InfoSidebar";
import { CardsStack } from "../CardsStack";
import { Table } from "../Table";
import { Rank } from "../../models/Rank";
import { Color } from "../../models/Color";

const TitleDiv = styled.div`
  font-size: 1.5rem;
  margin-left: 1rem;
`;

const ContentDiv = styled.div`
  display: flex;
  height: calc(100% - 64px);
`;

const GameStateDiv = styled.div`
  padding: 10rem;
  display: flex;
  width: 100%;
`;

export const MainPage: React.FC = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <GamesSharp />
          <Typography>
            <TitleDiv>Thousand Schnapsen</TitleDiv>
          </Typography>
        </Toolbar>
      </AppBar>
      <ContentDiv>
        <InfoSideBar />
        <GameStateDiv>
          <Table>
            <CardsStack
              cards={[
                { rank: Rank.Queen, color: Color.Clubs },
                { rank: Rank.Jack, color: Color.Diamonds },
              ]}
              size="medium"
            />
          </Table>
        </GameStateDiv>
      </ContentDiv>
    </>
  );
};
