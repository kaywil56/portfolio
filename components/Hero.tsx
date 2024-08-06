'use client'

import { TypeAnimation } from 'react-type-animation';
import { Container, Text, useMantineTheme, Group } from "@mantine/core";
import classes from "./Hero.module.css"

export function Hero() {

    const theme = useMantineTheme()

    return <>
        <section className={classes.heroSection}>
            <Container size={"md"} className={classes.container}>
                <div>
                    {/* <Text className={classes.heroText} tt={"uppercase"} fw={900} ta={"center"} fz={{ base: 50, sm: 70 }}>I'm Kaylem Williams</Text> */}
                    <div className={classes.wrapper}>
                        <span data-text="Kaylem"></span>
                        <span data-text="Williams"></span>
                    </div>
                    <Group align='center' justify='center' >
                        <TypeAnimation
                            sequence={[
                                'A Graduate in Information Technology.',
                                1000,
                                'Based in New Zealand.',
                                1000
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: theme.fontSizes.md, display: 'inline-block' }}
                        />
                    </Group>
                </div>
            </Container>
        </section>
    </>
}