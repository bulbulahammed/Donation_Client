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


const  Navbar = () => {

  return (
    <>
        <AppBar position="sticky" className="bg-green-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link href="/">
                        <Image src={logo} width={100} height={100} alt="Logo" />
                    </Link>
                <Box className="w-full text-right">
                    <Link href="/">
                        <Button className="text-black">Home</Button>
                    </Link>
                    <Link href="/program">
                        <Button className="text-black">Program</Button>
                    </Link>
                    <Link href="/stories">
                        <Button className="text-black">Stories</Button>
                    </Link>
                    <Link href="/blog">
                        <Button className="text-black">Blog</Button>
                    </Link>
                    <Link href="/about">
                        <Button className="text-black">About</Button>
                    </Link>
                </Box>
                <ProfileMenu/>
                </Toolbar>
            </Container>
        </AppBar>
    </>
  );
}
export default Navbar;