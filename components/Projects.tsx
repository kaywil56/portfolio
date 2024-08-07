'use client'

import { Title, Container, SimpleGrid, Text, Box, Anchor, Group, useMantineTheme } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";

export function Projects() {
    const theme = useMantineTheme()

    return <Container style={{ scrollMarginTop: "120px" }} id="projects" mb={120} size={"md"}>
        <Title mb={"xl"} order={2} size={"h3"}>Projects</Title>
        <SimpleGrid verticalSpacing={"xl"} spacing={"lg"} cols={{ base: 1, lg: 2 }}>
            <div>
                <Box mb={"sm"} bg={"gray"} h={200} w={"100%"}></Box>
                <Group mb={"sm"} justify="space-between" align="center">
                    <Title order={3} size={"h4"}>Streetle</Title>
                    <Group align="center" gap={"xs"}>
                        <IconBrandGithub color={theme.colors.indigo[5]} size={18} />
                        <Anchor size="sm" underline="hover" href="https://github.com/kaywil56/streetle" target="_blank">
                            View Code
                        </Anchor>
                    </Group>
                </Group>
                <Text size="sm">Streetle is a daily game inspired by GeoGuessr. It's built with the Google Street View API and the React front-end framework. The game starts with you being placed in a random location in the world, where you have to guess where you are. After each guess, you receive information about your guess and the correct location, including direction, distance, and other details.</Text>
            </div>
            <div>
                <Box mb={"sm"} bg={"gray"} h={200} w={"100%"}></Box>
                <Group mb={"sm"} justify="space-between" align="center">
                    <Title order={3} size={"h4"}>Poker Game</Title>
                    <Group align="center" gap={"xs"}>
                        <IconBrandGithub color={theme.colors.indigo[5]} size={18} />
                        <Anchor size="sm" underline="hover" href="https://mantine.dev/" target="_blank">
                            View Code
                        </Anchor>
                    </Group>
                </Group>
                <Text size="sm">Streetle is a daily game inspired by GeoGuessr. It's built with the Google Street View API and the React front-end framework. The game starts with you being placed in a random location in the world, where you have to guess where you are. After each guess, you receive information about your guess and the correct location, including direction, distance, and other details.</Text>
            </div>
        </SimpleGrid>
    </Container>
}