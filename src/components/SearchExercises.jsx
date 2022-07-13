import React, { useState } from "react";

import { Stack, Typography, Box } from "@mui/material";

import HorizontalScrollBar from "./HorizontalScrollBar";
import Search from "./Search";

const SearchExercises = ({ exercises, bodyParts, exerciseList, dispatch }) => {
  const [search, setSearch] = useState("");

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

  const handleFilter = (bodyPart) => {
    let modifiedList = [];
    if (bodyPart === "all") {
      modifiedList = [...exerciseList];
    } else {
      modifiedList = exerciseList.filter(
        (exercise) => exercise.bodyPart === bodyPart
      );
    }
    dispatch({ type: "FILTER", payload: modifiedList });
  };

  return (
    <Box>
      <Stack alignItems="center" justifyContent="center" p={2.8}>
        <Typography
          component="h2"
          textAlign="center"
          mb={3}
          mt={{ xs: 2, lg: 20 }}
          sx={{
            fontSize: { lg: "2.5rem", xs: "1.8rem" },
          }}
        >
          Awesome exercises <br /> you should know
        </Typography>
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        <Box sx={{ position: "relative", width: "100%", p: "1.2rem" }}>
          <HorizontalScrollBar
            bodyParts={bodyParts}
            onFilter={handleFilter}
            isBodyParts
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchExercises;
