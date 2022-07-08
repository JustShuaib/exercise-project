import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import Logo from "../assets/icons/logo.png";

const Footer = () => (
  <Stack
    alignItems="center"
    justifyContent="center"
    direction={{ xs: "column", sm: "row" }}
    gap={{ xs: 2, sm: 4 }}
    mt="3rem"
    py="3rem"
    bgcolor="#fff3f4"
  >
    <Link to="/">
      <img src={Logo} alt="logo" width="80rem" />
    </Link>
    <Typography
      fontSize={{ xs: "1.4rem", lg: "1.6rem" }}
      textAlign="center"
      fontFamily="Josefin Sans"
    >
      Made with ❤️ by{" "}
      <a
        href="https://www.github.com/JustShuaib"
        target="_blank"
        rel="noopener noreferrer"
      >
        Adeoti Shuaib
      </a>
    </Typography>
  </Stack>
);

export default Footer;
