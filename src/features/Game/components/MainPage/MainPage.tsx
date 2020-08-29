import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { GamesSharp } from "@material-ui/icons";
import styled from "styled-components";
import { InfoSideBar } from "../InfoSidebar";
import { GameState } from "../GameState";

const TitleDiv = styled.div`
  font-size: 1.5rem;
  margin-left: 1rem;
`;

const ContentDiv = styled.div`
  display: flex;
  height: calc(100% - 64px);
`;

const GameStateDiv = styled.div`
  padding: 2rem;
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
            <TitleDiv>THOUSAND SCHNAPSEN</TitleDiv>
          </Typography>
        </Toolbar>
      </AppBar>
      <ContentDiv>
        <InfoSideBar />
        <GameStateDiv>
          <GameState />
        </GameStateDiv>
      </ContentDiv>
    </>
  );
};
