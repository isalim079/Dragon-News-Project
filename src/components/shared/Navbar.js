/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "@/assets/logoN.png";
import { IconButton, Stack } from "@mui/material";
import Link from "next/link";

// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import { Image, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import Header from "./Header";

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

function Navbar() {
    return (
        <>
        <Header />
            <AppBar position="static" className="bg-black">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Image src={logo} width={100} height={100} alt="logo" />

                    <Box className="w-full text-center">
                        {navItems.map((item) => (
                            <Link key={item} href={item?.pathname}>
                                <Button className="text-white">
                                    {item?.route}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Box>
                        <Stack
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
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        </>
    );
}
export default Navbar;
