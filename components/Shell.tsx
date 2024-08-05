'use client'

import { AppShell, Burger, Group, UnstyledButton, Title } from '@mantine/core';
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
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Group justify="space-between" style={{ flex: 1 }}>
                        <Title>Portfolio</Title>
                        <Group ml="xl" gap={0} visibleFrom="sm">
                            <UnstyledButton className={classes.control}>About me</UnstyledButton>
                            <UnstyledButton className={classes.control}>Projects</UnstyledButton>
                            <UnstyledButton className={classes.control}>Get In Contact</UnstyledButton>
                        </Group>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4}>
                <UnstyledButton className={classes.control}>About me</UnstyledButton>
                <UnstyledButton className={classes.control}>Projects</UnstyledButton>
                <UnstyledButton className={classes.control}>Get In Contact</UnstyledButton>
            </AppShell.Navbar>
            <AppShell.Main>
                {children}
            </AppShell.Main>
        </AppShell>
    );
}