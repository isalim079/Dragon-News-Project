import headingImage from "@/assets/The Dragon News.png";
import { getCurrentDate } from "@/utils/getCurrentDate";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

const Header = () => {
    const currentDate = getCurrentDate();

    return (
        <Box className="w-full">
            <Container>
                <Image
                    className="mx-auto"
                    src={headingImage}
                    width={500}
                    height={500}
                    alt="logo"
                />
                <Typography color="gray" variant="body2" textAlign="center" className="my-2">
                    Journalism Without Fear or Favour
                </Typography>
                <Typography textAlign="center">{currentDate}</Typography>
            </Container>
        </Box>
    );
};

export default Header;
