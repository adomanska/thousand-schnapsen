import React from "react";
import styled from "styled-components";
import { Color } from "../../models/Color";
import { Marriages } from "../Marriages";
import { Points } from "../Points";
import { Button, Paper } from "@material-ui/core";

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

const mockData = {
    usedMariages: [Color.Spades, Color.Diamonds],
    activeMarriage: Color.Diamonds,
    playerNames: ["Opponent1", "Me", "Opponent2"],
    points: [40, 120, 60]
}

export const InfoSideBar: React.FC = () => {
    const {
        usedMariages,
        activeMarriage,
        playerNames,
        points
    } = mockData; // TODO: Replace mock data with data fetched from redux store

    return (
        <Drawer>
            <DrawerItem>
                <DrawerItemHeader>Marriages</DrawerItemHeader>
                <Marriages
                    usedMariages={usedMariages}
                    activeMarriage={activeMarriage}
                />
            </DrawerItem>
            <DrawerItem>
                <DrawerItemHeader>Points</DrawerItemHeader>
                <Points
                    playerNames={playerNames}
                    points = {points}
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
    );
}
