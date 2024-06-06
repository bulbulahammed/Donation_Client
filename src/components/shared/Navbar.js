// 'use client'
// import logo from "@/assets/Logo.png";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import Toolbar from '@mui/material/Toolbar';
// import Image from 'next/image';
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import ProfileMenu from "../ui/ProfileMenu";


// const menuItems = [
//     {name: "Home", href:"/"},
//     {name: "Program", href:"/program"},
//     {name: "Stories", href:"/stories"},
//     {name: "Blog", href:"/blog"},
//     {name: "About", href:"/about"},
// ]

// const Navbar = () => {
//     const pathname = usePathname();
//     return (
//         <>
//             <AppBar position="sticky" className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
//                 <Container maxWidth="xl">
//                     <Toolbar disableGutters>
//                         <Link href="/">
//                             <Image src={logo} width={100} height={100} alt="Logo" />
//                         </Link>
//                         <Box className="w-full text-right">
//                             {
//                                 menuItems.map((link)=>{
//                                     const isActive = pathname === link.href || (pathname === "/" && link.href === "/");
//                                     return (
//                                         <Link href={link.href} key={link.name}>
//                                               <Button className={isActive ? "text-black" : "text-black font-bold"} >{link.name}</Button>
//                                         </Link>
//                                     );
//                                 })
//                             }
//                         </Box>
//                         <ProfileMenu />
//                     </Toolbar>
//                 </Container>
//             </AppBar>
//         </>
//     );
// }

// export default Navbar;



 'use client'
import logo from "@/assets/Logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from 'react';
import ProfileMenu from "../ui/ProfileMenu";

const menuItems = [
    {name: "Home", href:"/"},
    {name: "Program", href:"/program"},
    {name: "Stories", href:"/stories"},
    {name: "Blog", href:"/blog"},
    {name: "About", href:"/about"},
]


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pathname = usePathname();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="sticky" className="bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/" className="hidden md:block" >
            <Image src={logo} width={100} height={100} alt="Logo" />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              className="text-green-500"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Box className="flex flex-col">
              {
                  menuItems.map((link)=>{
                      const isActive = pathname === link.href || (pathname === "/" && link.href === "/");
                      return (
                          <Link href={link.href} key={link.name}>
                              <Button className={isActive ? "text-black" : "text-black font-bold"} >{link.name}</Button>
                          </Link>
                      );
                  })
                }
              </Box>
            </Menu>
          </Box>
          <Box className="w-full text-right hidden md:block">
            {
              menuItems.map((link)=>{
                const isActive = pathname === link.href || (pathname === "/" && link.href === "/");
                  return (
                    <Link href={link.href} key={link.name}>
                      <Button className={isActive ? "text-black" : "text-black font-bold"} >{link.name}</Button>
                    </Link>
                  );
              })
            }
          </Box>
          <Link href="/" className="block mx-auto md:hidden text-center">
            <Image src={logo} width={100} height={100} alt="Logo" />
          </Link>
            <ProfileMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
