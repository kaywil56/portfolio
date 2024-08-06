'use client'

import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Container, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';

export function Contact() {
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validate: {
            name: (value) => value.trim().length < 2,
            email: (value) => !/^\S+@\S+$/.test(value),
            subject: (value) => value.trim().length === 0,
        },
    });

    return <Container style={{ scrollMarginTop: "120px" }} id="contact" mb={120} size={"md"}>
        <Title mb={"xl"} order={2} size={"h3"}>Get in contact</Title>
        <SimpleGrid cols={{ base: 1, sm: 3 }}>
            <Group align='center'>
                <IconPhone size={24} />
                <div>
                    <Text c="dimmed" size='xs'>Mobile</Text>
                    <Text>+64 27 357 038</Text>
                </div>
            </Group>
            <Group align='center'>
                <IconMapPin size={24} />
                <div>
                    <Text c="dimmed" size='xs'>Location</Text>
                    <Text>New Zealand</Text>
                </div>
            </Group>
            <Group align='center'>
                <IconAt size={24} />
                <div>
                    <Text c="dimmed" size='xs'>Email</Text>
                    <Text>kaywil56@gmail.com</Text>
                </div>
            </Group>
        </SimpleGrid>
        <form onSubmit={form.onSubmit(() => { })}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
                <TextInput
                    label="Name"
                    placeholder="Your name"
                    name="name"
                    variant="filled"
                    {...form.getInputProps('name')}
                />
                <TextInput
                    label="Email"
                    placeholder="Your email"
                    name="email"
                    variant="filled"
                    {...form.getInputProps('email')}
                />
            </SimpleGrid>

            <TextInput
                label="Subject"
                placeholder="Subject"
                mt="md"
                name="subject"
                variant="filled"
                {...form.getInputProps('subject')}
            />
            <Textarea
                mt="md"
                label="Message"
                placeholder="Your message"
                maxRows={10}
                minRows={5}
                autosize
                name="message"
                variant="filled"
                {...form.getInputProps('message')}
            />

            <Group justify="flex-end" mt="xl">
                <Button type="submit" size="md">
                    Send message
                </Button>
            </Group>
        </form>
    </Container>
}

