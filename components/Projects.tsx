'use client'

import { Title, Container, SimpleGrid } from "@mantine/core";
import poker_game from "../public/poker_game.png"
import streetle from "../public/streetle.png"
import cs from "../public/cs.png"
import delay from "../public/delay.png"
import Project from "./Project";

export function Projects() {
    return <Container style={{ scrollMarginTop: "120px" }} id="projects" mb={120} size={"md"}>
        <Title mb={"xl"} order={2} size={"h3"}>Projects</Title>
        <SimpleGrid verticalSpacing={"xl"} spacing={"lg"} cols={{ base: 1, lg: 2 }}>
            <Project
                title="Delay Effect"
                description="A versatile delay effect plugin built with C++ and React, available as both a standalone application and a VST3 plugin. It features essential controls such as feedback, delay time, dry/wet mix, and a ping-pong mode. The delay time can be set freely or snapped to musical divisions, including normal, triplets, and dotted notes, offering precise rhythmic control."
                githubLink="https://github.com/kaywil56/DelayEffect"
                imageSource={delay.src}
            />
            <Project
                title="Game of Life Generative Sequencer"
                description="A musical sequencer that generates patterns based on Conway's Game of Life cellular automaton, implemented in the Godot game engine. The system transforms the classic 2D grid of cells into a dynamic musical instrument where living cells trigger musical events."
                githubLink="https://github.com/kaywil56/Conway-s-Generative-Sequencer-"
                imageSource={cs.src}
            />
            <Project
                title="Streetle"
                description="Streetle is a game inspired by GeoGuessr. It's built with the Google Street View API and the React front-end framework. The game starts with you being placed in a random location in the world, where you have to guess where you are. After each guess, you receive information about your guess and the correct location, including direction, distance, and other details."
                githubLink="https://github.com/kaywil56/streetle"
                imageSource={streetle.src}
            />
            <Project
                title="Poker Game"
                description="A live multiplayer poker game built with React, utilizing Firebase's real-time database feature. Users can create and join games, as well as register and log in."
                githubLink="https://github.com/kaywil56/advanced-app-dev-poker-assignment"
                imageSource={poker_game.src}
            />
        </SimpleGrid>
    </Container >
}