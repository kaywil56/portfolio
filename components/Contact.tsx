'use client'

import { Flex, Title, Group, Container, Text } from '@mantine/core';
import { IconPhone, IconAt } from '@tabler/icons-react';

export function Contact() {
    return <Container style={{ scrollMarginTop: "120px" }} id="contact" mb={120} size={"md"}>
        <Title ta={"center"} mb={"md"} order={2} size={"h3"}>Get in contact</Title>
        <Text c={"dimmed"} ta={"center"} size='sm' mb={"xl"}>If you'd like to get in touch, feel free to email me or give me a call.</Text>
        <Flex justify={"space-evenly"}>
            <Group align='center'>
                <IconPhone size={24} />
                <div>
                    <Text c="dimmed" size='xs'>Mobile</Text>
                    <Text>+64 27 357 0338</Text>
                </div>
            </Group>
            <Group align='center'>
                <IconAt size={24} />
                <div>
                    <Text c="dimmed" size='xs'>Email</Text>
                    <Text>kaywil56@gmail.com</Text>
                </div>
            </Group>
        </Flex>
    </Container>
}