import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Link from 'next/link';
import * as React from 'react';


const ProfileMenu = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSignOUt = () =>{
        console.log("Sign out Clicked")
    }
    return (
        <div>
            <Button onClick={handleOpen}>
                <AccountCircleIcon/>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-400 shadow-lg p-4 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 text-white">
                    <Stack spacing="2">
                        <Link  href="/login">
                            <Button className="text-white">Log in</Button>
                        </Link>
                        <Link  href="/signup">
                            <Button className="text-white">Sign Up</Button>
                        </Link>
                        <span>
                            <Button onClick={handleSignOUt}  className="text-white">Log out</Button>
                        </span>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
};

export default ProfileMenu;

