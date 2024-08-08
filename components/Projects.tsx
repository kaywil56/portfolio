'use client'

import { Title, Container, SimpleGrid, Text, Box, Anchor, Group, useMantineTheme } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import { Carousel } from '@mantine/carousel';
import Image from "next/image";
import poker_game from "../public/poker_game.png"
import poker_login from "../public/poker_login.png"
import poker_session from "../public/poker_session.png"
import streetle_how_to_play from "../public/streetle_how_to_play.png"
import streetle_1 from "../public/streetle_1.png"
import streetle_2 from "../public/streetle_2.png"


export function Projects() {
    const theme = useMantineTheme()

    return <Container style={{ scrollMarginTop: "120px" }} id="projects" mb={120} size={"md"}>
        <Title mb={"xl"} order={2} size={"h3"}>Projects</Title>
        <SimpleGrid verticalSpacing={"xl"} spacing={"lg"} cols={{ base: 1, lg: 2 }}>
            <div>
                <Carousel mb={"sm"} height={250}>
                    <Carousel.Slide>
                        <div style={{ position: "relative", height: "250px", width: "100%" }}>
                            <Image objectFit="contain" fill alt="Streetle One" src={streetle_1} />
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={{ position: "relative", height: "250px", width: "100%" }}>
                            <Image objectFit="contain" fill alt="Streetle Two" src={streetle_2} />
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={{ position: "relative", height: "250px", width: "100%" }}>
                            <Image objectFit="contain" fill alt="Streetle How to Play" src={streetle_how_to_play} />
                        </div>
                    </Carousel.Slide>
                </Carousel>
                <Group mb={"sm"} justify="space-between" align="center">
                    <Title order={3} size={"h4"}>Streetle</Title>
                    <Group align="center" gap={"xs"}>
                        <IconBrandGithub color={theme.colors.indigo[5]} size={18} />
                        <Anchor size="sm" underline="hover" href="https://github.com/kaywil56/streetle" target="_blank">
                            View Code
                        </Anchor>
                    </Group>
                </Group>
                <Text size="sm">Streetle is a game inspired by GeoGuessr. It's built with the Google Street View API and the React front-end framework. The game starts with you being placed in a random location in the world, where you have to guess where you are. After each guess, you receive information about your guess and the correct location, including direction, distance, and other details.</Text>
            </div>
            <div>
                <Carousel mb={"sm"} height={250}>
                    <Carousel.Slide>
                        <div style={{ position: "relative", height: "250px", width: "100%" }}>
                            <Image objectFit="contain" fill alt="Poker Game" src={poker_game} />
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={{ position: "relative", height: "250px", width: "100%" }}>
                            <Image objectFit="contain" fill alt="Poker Session" src={poker_session} />
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={{ position: "relative", height: "250px", width: "100%" }}>
                            <Image objectFit="contain" fill alt="Poker Login" src={poker_login} />
                        </div>
                    </Carousel.Slide>
                </Carousel>
                <Group mb={"sm"} justify="space-between" align="center">
                    <Title order={3} size={"h4"}>Poker Game</Title>
                    <Group align="center" gap={"xs"}>
                        <IconBrandGithub color={theme.colors.indigo[5]} size={18} />
                        <Anchor size="sm" underline="hover" href="https://github.com/kaywil56/advanced-app-dev-poker-assignment" target="_blank">
                            View Code
                        </Anchor>
                    </Group>
                </Group>
                <Text size="sm">A live multiplayer poker game built with React, utilizing Firebase's real-time database feature. Users can create and join games, as well as register and log in.</Text>
            </div>
        </SimpleGrid>
    </Container>
}