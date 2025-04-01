import {
    Card,
    Group,
    Image,
    Text,
    Anchor,
    useMantineTheme,
} from '@mantine/core';
import classes from './Project.module.css';
import { IconBrandGithub } from "@tabler/icons-react";

interface Props {
    title: string
    description: string
    imageSource: string
    githubLink: string
}

const Project = ({ title, description, imageSource, githubLink }: Props) => {
    const theme = useMantineTheme();
    const linkProps = { href: githubLink, target: '_blank', rel: 'noopener noreferrer' };

    return (
        <Card withBorder radius="md" className={classes.card}>
            <Card.Section p="md">
                <a {...linkProps}>
                    <Image radius={"md"} className={classes.mask} src={imageSource} height={180} />
                </a>
            </Card.Section>
            <Text className={classes.title} fw={500} component="a" {...linkProps}>
                {title}
            </Text>
            <div style={{ flexGrow: "1", marginBottom: "2rem" }}>
                <Text fz="sm" c="dimmed">
                    {description}
                </Text>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Group align="center" gap={"xs"}>
                    <IconBrandGithub color={theme.colors.indigo[5]} size={18} />
                    <Anchor size="sm" underline="hover" href={githubLink} target="_blank">
                        View Code
                    </Anchor>
                </Group>
            </div>
        </Card>
    );
}

export default Project