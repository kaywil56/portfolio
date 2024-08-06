import { Title, Container, SimpleGrid, Text, Box } from "@mantine/core";

export function Projects() {
    return <Container mb={120} size={"md"}>
        <Title mb={"xl"} order={2} size={"h3"}>Projects</Title>
        <SimpleGrid verticalSpacing={"xl"} spacing={"lg"} cols={{ base: 1, lg: 2 }}>
            <div>
                <Box mb={"sm"} bg={"gray"} h={200} w={"100%"}></Box>
                <Title mb={"sm"} order={3} size={"h4"}>Project 1</Title>
                <Text size="sm">Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an, cule dicta iriure at. Ubique maluisset vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos ne pri, eum mollis salutandi corrumpit et, fugit apeirian duo ad.</Text>
            </div>
            <div>
                <Box mb={"sm"} bg={"gray"} h={200} w={"100%"}></Box>
                <Title mb={"sm"} order={3} size={"h4"}>Project 2</Title>
                <Text size="sm">Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an, cule dicta iriure at. Ubique maluisset vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos ne pri, eum mollis salutandi corrumpit et, fugit apeirian duo ad.</Text>
            </div>
            <div>
                <Box mb={"sm"} bg={"gray"} h={200} w={"100%"}></Box>
                <Title mb={"sm"} order={3} size={"h4"}>Project 3</Title>
                <Text size="sm">Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an, cule dicta iriure at. Ubique maluisset vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos ne pri, eum mollis salutandi corrumpit et, fugit apeirian duo ad.</Text>
            </div>
            <div>
                <Box mb={"sm"} bg={"gray"} h={200} w={"100%"}></Box>
                <Title mb={"sm"} order={3} size={"h4"}>Project 4</Title>
                <Text size="sm">Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an, cule dicta iriure at. Ubique maluisset vel te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique ut. Te cule tation munere noluisse. Enim torquatos ne pri, eum mollis salutandi corrumpit et, fugit apeirian duo ad.</Text>
            </div>
        </SimpleGrid>
    </Container>
}