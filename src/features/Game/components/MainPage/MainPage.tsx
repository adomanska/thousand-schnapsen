import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { GamesSharp } from "@material-ui/icons";
import styled from "styled-components";
import { InfoSideBar } from "../InfoSidebar";
import { GameStateContainer } from "../GameStateContainer";
import { defaultGameState } from "../../models/GameState";
import { useData } from "./hooks";

const Title = styled(Typography)`
  font-size: 1.5rem;
  margin-left: 1rem;
`;

const ContentDiv = styled.div`
  display: flex;
  height: calc(100% - 64px);
`;

export const MainPage: React.FC = () => {
  const data = useData(defaultGameState);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <GamesSharp />
          <Title>THOUSAND SCHNAPSEN</Title>
        </Toolbar>
      </AppBar>
      <ContentDiv>
        <InfoSideBar data={data} />
        <GameStateContainer data={data} />
      </ContentDiv>
    </>
  );
};
