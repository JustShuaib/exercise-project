import React from "react";
import { Box, Button, TextField } from "@mui/material";

const Search = ({ search, setSearch, handleSearch }) => (
  <Box
    component="form"
    position="relative"
    mb="4.5rem"
    width="100%"
    maxWidth="59.4rem"
    onSubmit={handleSearch}
  >
    <TextField
      sx={{
        input: {
          height: { lg: "1.5rem", xs: "1rem" },
          fontFamily: "Josefin Sans",
          fontSize: { xs: "1.2rem", lg: "1.4rem" },
        },
        width: "70%",
        backgroundColor: "white",
      }}
      value={search}
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
      placeholder="Search Exercises..."
      type="text"
    />
    <Button
      className="search-btn"
      type="submit"
      sx={{
        bgcolor: "#ff2625",
        color: "#fff",
        textTransform: "capitalize",
        width: "30%",
        fontSize: { lg: "1.2rem", xs: "1rem" },
        height: "100%",
        position: "absolute",
        right: "0",
        font: "inherit",
      }}
    >
      Search
    </Button>
  </Box>
);

export default Search;
