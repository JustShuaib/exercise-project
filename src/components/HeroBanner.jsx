import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <Box
    component="header"
    sx={{
      mt: "5rem",
      ml: { sm: "3.125rem" },
    }}
    position="relative"
    p="1.4rem"
  >
    <Typography
      color="#ff2625"
      component="h1"
      fontWeight={600}
      fontSize="2rem"
      fontFamily="inherit"
      letterSpacing="0.1rem"
    >
      Fitness Club
    </Typography>
    <Typography fontWeight={700} fontSize="2.5rem" my="1.7rem">
      Sweat, Smile <br /> and Repeat
    </Typography>
    <Typography mb={4} fontSize="1.4rem" fontFamily="Josefin Sans">
      Check out the most effective exercises
    </Typography>
    <Button
      variant="contained"
      color="error"
      href="#exercises"
      sx={{ bgcolor: "#ff2625", padding: "10px" }}
    >
      Explore Exercises
    </Button>
    <Typography
      fontWeight={600}
      color="#ff2626"
      mt="3rem"
      sx={{
        opacity: 0.1,
        display: { xs: "none", lg: "block" },
      }}
      fontSize="12.5rem"
    >
      Exercises
    </Typography>
    <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
