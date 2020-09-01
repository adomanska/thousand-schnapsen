import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { GamesSharp } from "@material-ui/icons";
import styled from "styled-components";
import { InfoSideBar } from "../InfoSidebar";
import { GameStateContainer } from "../GameStateContainer";
import { defaultGameState, GameState } from "../../models/GameState";

const TitleDiv = styled.div`
  font-size: 1.5rem;
  margin-left: 1rem;
`;

const ContentDiv = styled.div`
  display: flex;
  height: calc(100% - 64px);
`;

export const MainPage: React.FC = () => {
  const [data, setData] = useState<GameState>(defaultGameState);

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
        <InfoSideBar data={data} />
        <GameStateContainer data={data} />
      </ContentDiv>
    </>
  );
};
