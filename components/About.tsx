'use client'

import { Container, Title, Avatar, Text, Group, SimpleGrid, Stack } from "@mantine/core";

export function About() {
    return <Container style={{ scrollMarginTop: "120px" }} id="about" mb={120} size={"md"}>
        <Title mb={"xl"} order={2} size={"h3"}>About Me</Title>
        <Group align="flex-start" gap={"xl"} wrap="nowrap">
            <Avatar size={"xl"}>KW</Avatar>
            <Stack>
                <Text size="sm">I am a 24-year-old IT graduate with a passion for applying my technical knowledge and skills in real-world scenarios. I have a particular interest in web development, where I enjoy creating dynamic and user-friendly websites. Outside of my professional pursuits, I have a strong love for music, which inspires and energizes me in all aspects of my life.</Text>
                <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}
                    spacing={{ base: 10, sm: 'xl' }}
                    verticalSpacing={{ base: 'lg', sm: 'xl' }}
                    mt={40}>
                    <Group>
                        <Text c={"indigo"} size="sm">Name: </Text>
                        <Text size="sm">Kaylem Williams</Text>
                    </Group>
                    <Group>
                        <Text c={"indigo"} size="sm">Email: </Text>
                        <Text size="sm">kaywil56@gmail.com</Text>
                    </Group>
                    <Group>
                        <Text c={"indigo"} size="sm">Age: </Text>
                        <Text size="sm">24</Text>
                    </Group>
                </SimpleGrid>
            </Stack>
        </Group>
    </Container>
}