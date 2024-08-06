'use client'

import { Container, Title, Avatar, Text, Group, SimpleGrid, Stack } from "@mantine/core";

export function About() {
    return <Container style={{ scrollMarginTop: "120px" }} id="about" mb={120} size={"md"}>
        <Title mb={"xl"} order={2} size={"h3"}>About Me</Title>
        <Group align="flex-start" gap={"xl"} wrap="nowrap">
            <Avatar size={"xl"}>KW</Avatar>
            <Stack>
                <Text size="sm">Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an, cule dicta iriure at. Ubique maluisset vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos ne pri, eum mollis salutandi corrumpit et, fugit apeirian duo ad.</Text>
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
                    <Group>
                        <Text c={"indigo"} size="sm">Location: </Text>
                        <Text size="sm">New Zealand</Text>
                    </Group>
                    <Group>
                        <Text c={"indigo"} size="sm">Location: </Text>
                        <Text size="sm">New Zealand</Text>
                    </Group>
                    <Group>
                        <Text c={"indigo"} size="sm">Location: </Text>
                        <Text size="sm">New Zealand</Text>
                    </Group>
                </SimpleGrid>
            </Stack>
        </Group>
    </Container>
}