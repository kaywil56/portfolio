'use client'

import { Container, Title, Avatar, Text, Group, SimpleGrid, Stack } from "@mantine/core";

export function About() {
    return <Container style={{ scrollMarginTop: "120px" }} id="about" mb={120} size={"md"}>
        <Title mb={"xl"} order={2} size={"h3"}>About Me</Title>
        <Group align="flex-start" gap={"xl"} wrap="nowrap">
            <Avatar size={"xl"}>KW</Avatar>
            <Stack>
                <Text size="sm">As an IT enthusiast, I possess a strong desire to learn and expand my knowledge in the field. Problem-solving is a passion of mine, and I approach challenges with determination and perseverance. My enthusiasm for IT fuels my motivation to get the job done efficiently and effectively. My personality is friendly and easy-going, and I can get along with everyone.</Text>
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
