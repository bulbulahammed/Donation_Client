'use client'
import logo from "@/assets/Logo.png";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileMenu from "../ui/ProfileMenu";


const menuItems = [
    {name: "Home", href:"/"},
    {name: "Program", href:"/program"},
    {name: "Stories", href:"/stories"},
    {name: "Blog", href:"/blog"},
    {name: "About", href:"/about"},
]

const Navbar = () => {

    const pathname = usePathname();
    
    return (
        <>
            <AppBar position="sticky" className="bg-green-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Link href="/">
                            <Image src={logo} width={100} height={100} alt="Logo" />
                        </Link>
                        <Box className="w-full text-right">
                            {
                                menuItems.map((link)=>{
                                    const isActive = pathname.startsWith(link.href);
                                    return (
                                        <Link href={link.href} key={link.name} >
                                              <Button className={isActive ? "text-green-500" : "text-red-600"} >{link.name}</Button>
                                        </Link>
                                    );
                                })
                            }
                        </Box>
                        <ProfileMenu />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default Navbar;
