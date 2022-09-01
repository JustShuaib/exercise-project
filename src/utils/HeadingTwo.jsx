import React from "react";
import Typography from "@mui/material/Typography";

const HeadingTwo = ({ children, ...props }) => (
  <Typography
    variant="h2"
    fontSize="1.8rem"
    textAlign="center"
    mb={{ xs: 3, lg: 5 }}
    {...props}
  >
    {children}
  </Typography>
);

export default HeadingTwo;
