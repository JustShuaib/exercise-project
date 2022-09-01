import React from "react";
import { Stack, Typography } from "@mui/material";

const BodyPart = ({ item, onFilter, img }) => (
  <Stack
    alignItems="center"
    justifyContent="center"
    sx={{
      backgroundColor: "#fff",
      width: "16.875rem",
      height: "17.5rem",
      gap: "3rem",
      // mx: { lg: "1rem" },
      cursor: "pointer",
      borderBottomLeftRadius: "1.4rem",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
      },
    }}
    onClick={() => {
      onFilter(item);
      document
        .getElementById("exercises")
        .scrollIntoView({ behavior: "smooth" });
    }}
  >
    <img src={img} alt={img} style={{ width: "2.5rem", height: "2.5rem" }} />
    <Typography
      fontSize="1.5rem"
      fontWeight="bold"
      color="#ff2625"
      height="2.5rem"
      textTransform="capitalize"
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
