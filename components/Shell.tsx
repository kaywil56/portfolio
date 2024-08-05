'use client'

import { AppShell, Burger, Group, UnstyledButton, Title, Container, Button } from '@mantine/core';
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
        >
            <AppShell.Header>
                <Container size="md">
                    <div className={classes.inner}>
                        <Title>Portfolio</Title>
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
        </AppShell>
    );
}