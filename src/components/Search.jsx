import React from "react";
import { Box, Button, TextField } from "@mui/material";

const Search = ({ dispatch, exercises }) => {
  const [search, setSearch] = React.useState("");
  const handleSearch = async (e) => {
    e.preventDefault();
    const searchTerm = search.toLowerCase();
    if (searchTerm) {
      const searchExercises = exercises.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searchTerm) ||
          exercise.target.toLowerCase().includes(searchTerm) ||
          exercise.equipment.toLowerCase().includes(searchTerm) ||
          exercise.bodyPart.toLowerCase().includes(searchTerm)
      );
      setSearch("");
      dispatch({ type: "SEARCH", payload: searchExercises });
      document.getElementById("exercises").scrollIntoView();
    }
  };

  return (
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
        type="submit"
        sx={{
          bgcolor: "#ff2625",
          color: "#fff",
          width: "30%",
          fontSize: { lg: "1.2rem", xs: "0.8rem" },
          height: "100%",
          position: "absolute",
          right: "0",
          "&:hover": {
            color: "#ff2625",
            border: "1px solid #ff2625",
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
};
export default Search;
