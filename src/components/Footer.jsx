import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/logo.png";
const Footer = () => {
  return (
    <Box mt="3rem" bgcolor="#fff3f4">
      <Stack alignItems="center" px="5rem" pt="3rem">
        <img src={Logo} alt="logo" />
        <Typography variant="h5" pb="3rem" mt="2rem">
          Made with ❤️by{" "}
          <a
            href="www.github.com/JustShuaib"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adeoti Shuaib
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;