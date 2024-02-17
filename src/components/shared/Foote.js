import { Box, Container, Typography } from "@mui/material";



const Footer = () => {
    return (
        <Box className=" px-2 py-10 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
            <Container>
                <Typography color="black" variant="body2" textAlign="center">
                    @2024 All right Reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;