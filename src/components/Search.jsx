import React from "react";
import { Box, Button, FormControl, OutlinedInput } from "@mui/material";

const Search = ({ dispatch, exercises }) => {
  const [search, setSearch] = React.useState("");
  const handleSearch = async (e) => {
    e.preventDefault();
    const searchTerm = search.toLowerCase();
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      const searchExercises = exercises.filter(
        ({ name, target, equipment, bodyPart }) =>
          name.toLowerCase().includes(term) ||
          target.toLowerCase().includes(term) ||
          equipment.toLowerCase().includes(term) ||
          bodyPart.toLowerCase().includes(term)
      );
      setSearch("");
      dispatch({ type: "SEARCH", payload: searchExercises });
      document.getElementById("exercises").scrollIntoView();
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      mb="4.5rem"
    >
      <FormControl onSubmit={handleSearch}>
        <OutlinedInput
          value={search}
          sx={{
            width: { xs: "70vw", lg: "50vw" },
          }}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises..."
          endAdornment={
            <Button
              size="large"
              type="submit"
              onClick={handleSearch}
              sx={{
                color: "#ff2625",
                px: { xs: "0.8rem", lg: "1.2rem" },
              }}
            >
              Search
            </Button>
          }
        />
      </FormControl>
    </Box>
  );
};
export default Search;
