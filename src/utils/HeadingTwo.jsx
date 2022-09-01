import React from "react";
import { Typography } from "@mui/material";

const HeadingTwo = ({ children }) => (
  <Typography
    variant="h2"
    fontSize="1.8rem"
    textAlign="center"
    mb={{ xs: 2, lg: 5 }}
  >
    {children}
  </Typography>
);

export default HeadingTwo;
