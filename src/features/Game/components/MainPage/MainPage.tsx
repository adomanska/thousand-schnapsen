import React from "react";
import { AppBar, Toolbar, Typography, Paper, Button } from "@material-ui/core";
import { GamesSharp } from "@material-ui/icons";
import styled from "styled-components";
import { Marriages } from "../Marriages";
import { Color } from "../../models/Color";
import { Points } from "../Points";

const TitleDiv = styled.div`
    font-size: 1.5rem;
    margin-left: 1rem;
`

const ContentDiv = styled.div`
    display: flex;
    height: calc(100% - 64px);
`;

const Drawer = styled(Paper)`
    width: min-content;
    margin: 0.5rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    & > * {
        margin-bottom: 2rem;
    }
`;

const DrawerItemHeader = styled.span`
    color: #3f51b5;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
`;

const DrawerItem = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MainPage: React.FC = () => {
    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <GamesSharp/>
                    <Typography>
                        <TitleDiv>
                            Thousand Schnapsen
                        </TitleDiv>
                    </Typography>
                </Toolbar>
            </AppBar>
            <ContentDiv>
                <Drawer>
                    <DrawerItem>
                        <DrawerItemHeader>Marriages</DrawerItemHeader>
                        <Marriages
                            usedMariages={[Color.Spades, Color.Diamonds]}
                            activeMarriage={Color.Diamonds}
                        />
                    </DrawerItem>
                    <DrawerItem>
                        <DrawerItemHeader>Points</DrawerItemHeader>
                        <Points
                            playerNames={["Opponent1", "Me", "Opponent2"]}
                            points = {[40, 120, 60]}
                        />
                    </DrawerItem>
                    <DrawerItem>
                        <Button
                            variant="contained"
                            color="secondary"
                        >
                            New game
                        </Button>
                    </DrawerItem>
                </Drawer>
            </ContentDiv>
        </>
    )
};
