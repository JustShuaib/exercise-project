import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/icons/logo.png";
const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    mt={{ xs: "1.5rem", sm: "2rem" }}
    px="1.4rem"
    width={{ xs: "100%", lg: "35rem" }}
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "3rem", marginLeft: "1.4rem" }}
      />
    </Link>
    <Stack direction="row" gap="2.5rem" fontSize="1.5rem">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#3a1212",
          borderBottom: "3px solid #ff2625",
        }}
      >
        Home
      </Link>
      <a href="#exercises" style={{ textDecoration: "none", color: "#3a1212" }}>
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
