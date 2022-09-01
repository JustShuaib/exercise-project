import React from "react";
import Button from "@mui/material/Button";

const CardBtn = ({ background, children }) => {
  return (
    <Button
      sx={{
        ml: "1.4rem",
        color: "#fff",
        background: background,
        borderRadius: "20px",
        textTransform: "capitalize",
        fontSize: "0.8rem",
      }}
    >
      {children}
    </Button>
  );
};

export default CardBtn;
