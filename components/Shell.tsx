'use client'

import { IconBrandGithub } from '@tabler/icons-react';
import { AppShell, Group, Title, Text, Container, Button, ActionIcon } from '@mantine/core';
import classes from './Shell.module.css';
import Link from 'next/link';
import ScrollIntoView from 'react-scroll-into-view';

export function Shell({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <AppShell
            header={{ height: 60 }}
            footer={{ height: 60 }}
        >
            <AppShell.Header bd={"none"}>
                <Container size="md">
                    <div className={classes.inner}>
                        <Title
                            className={classes.logo}
                            size="h2"
                            fw={900}
                            variant="gradient"
                        >Kaylem.</Title>
                        <ScrollIntoView selector="#contact">
                            <Button component='a' variant="outline" radius="xs">Get in Contact</Button>
                        </ScrollIntoView>
                    </div>
                </Container>
            </AppShell.Header>
            <AppShell.Main>
                {children}
            </AppShell.Main>
            <AppShell.Footer bd={"none"}>
                <Container size="md">
                    <div className={classes.inner}>
                        <Text size='xs' variant="dimmed">Made by Kaylem Williams.</Text>
                        <Group gap={"xs"}>
                            <ActionIcon component='a' href='https://github.com/kaywil56/' color='grey' variant="subtle" aria-label="Github">
                                <IconBrandGithub size={24} stroke={2} />
                            </ActionIcon>
                        </Group>
                    </div>
                </Container>
            </AppShell.Footer>
        </AppShell >
    );
}