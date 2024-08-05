'use client'

import { IconBrandGithub, IconMail } from '@tabler/icons-react';
import { AppShell, Burger, Group, UnstyledButton, Title, Text, Container, Button, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Shell.module.css';

export function Shell({
    children,
}: {
    children: React.ReactNode;
}) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            footer={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
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
                        <Group gap={"xl"} visibleFrom="xs">
                            <UnstyledButton className={classes.control}>About me</UnstyledButton>
                            <UnstyledButton className={classes.control}>Projects</UnstyledButton>
                            <Button className={classes.control}>Get In Contact</Button>
                        </Group>
                        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="xs" />
                    </div>
                </Container>
            </AppShell.Header>
            <AppShell.Navbar>
                <UnstyledButton className={classes.control}>About me</UnstyledButton>
                <UnstyledButton className={classes.control}>Projects</UnstyledButton>
                <UnstyledButton className={classes.control}>Get In Contact</UnstyledButton>
            </AppShell.Navbar>
            <AppShell.Main>
                {children}
            </AppShell.Main>
            <AppShell.Footer bd={"none"}>
                <Container size="md">
                    <div className={classes.inner}>
                        <Text size='xs' variant="dimmed">Made by Kaylem Williams.</Text>
                        <Group gap={"xs"}>
                            <ActionIcon color='grey' variant="subtle" aria-label="Github">
                                <IconBrandGithub size={24} stroke={2} />
                            </ActionIcon>
                            <ActionIcon color='grey' variant="subtle" aria-label="Mail">
                                <IconMail size={24} stroke={2} />
                            </ActionIcon>
                        </Group>
                    </div>
                </Container>
            </AppShell.Footer>
        </AppShell >
    );
}