"use client";

import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Image, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {

    const navItems = [
        {
            route: "Home",
            pathname: "/",
        },
        {
            route: "Pages",
            pathname: "/pages",
        },
        {
            route: "Category",
            pathname: "/category",
        },
        {
            route: "news",
            pathname: "/news",
        },
        {
            route: "about",
            pathname: "/about",
        },
        {
            route: "contact",
            pathname: "/contact",
        },
    ];

    return (
        <Box>
            <Container className="bg-black px-2 py-10">
                <Box
                className="w-full text-center"
                    direction="row"
                    sx={{
                        "& svg": {
                            color: "white",
                        },
                    }}
                >
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <Twitter />
                    </IconButton>
                    <IconButton>
                        <Instagram />
                    </IconButton>
                    <IconButton>
                        <Pinterest />
                    </IconButton>
                </Box>
                <Box className="w-full text-center">
                        {navItems.map((item) => (
                            <Link key={item} href={item?.pathname}>
                                <Button className="text-white">
                                    {item?.route}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Typography color="gray" variant="body2" textAlign='center'>@2023 The Dragon News. Design by Programming Hero</Typography>
            </Container>
        </Box>
    );
};

export default Footer;
