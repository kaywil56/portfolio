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
                    <Title order={3} size={"h4"}>Project 1</Title>
                    <Group align="center" gap={"xs"}>
                        <IconBrandGithub color={theme.colors.indigo[5]} size={18} />
                        <Anchor size="sm" underline="hover" href="https://mantine.dev/" target="_blank">
                            View Code
                        </Anchor>
                    </Group>
                </Group>
                <Text size="sm">Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an, cule dicta iriure at. Ubique maluisset vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos ne pri, eum mollis salutandi corrumpit et, fugit apeirian duo ad.</Text>
            </div>
        </SimpleGrid>
    </Container>
}