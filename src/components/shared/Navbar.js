"use client"
import logo from "@/assets/Logo.png";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from "next/link";
import ProfileMenu from "../ui/ProfileMenu";

const navItems = [
    {
        route: "Home",
        pathname: "/",
    },
    {
        route: "Program",
        pathname: "/program",
    },
    {
        route: "Stories",
        pathname: "/stories",
    },
    {
        route: "Blog",
        pathname: "/blog",
    },
    {
        route: "About",
        pathname: "/about",
    },
]

const  Navbar = () => {

  return (
    <>
        <AppBar position="static" className="bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Image src={logo} width={100} height={100} alt="Logo" />
                <Box className="w-full text-right">
                    {navItems.map((item) => (
                        <Link key={item} href={item.pathname}>
                            <Button className="text-black">{item.route}</Button>
                        </Link>
                    ))}
                </Box>
                <ProfileMenu/>
                </Toolbar>
            </Container>
        </AppBar>
    </>
  );
}
export default Navbar;