import { Title, Container } from "@mantine/core";
import classes from "./Hero.module.css"

export function Hero() {
    return <section className={classes.heroSection}>
    <Container w={"lg"}>
        <Title size={"h1"}>Portfolio</Title>
    </Container>
</section>
}