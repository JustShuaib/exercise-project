import React, { useState, useEffect } from "react";
import { Stack, Typography, Box, Button, TextField } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";

import { exerciseOptions, fetchData } from "../utils/fetchData";
const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchExercises);
    }
  };
  return (
    <Box>
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography
          textAlign="center"
          fontWeight={700}
          mb="50px"
          sx={{
            fontSize: { lg: "44px", xs: "30px" },
          }}
        >
          Awesome Exercises you <br /> Should Know
        </Typography>
        <Box position="relative" mb="72px" width="100%" maxWidth="1200px">
          <TextField
            sx={{
              input: {
                fontWeight: 700,
                border: "none",
                borderRadius: "4px",
                height: { lg: "1.5rem", xs: "1rem" },
              },
              // width: { lg: "800px", xs: "70%" },
              width: "70%",
              backgroundColor: "white",
              borderRight: "none",
            }}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
            onSubmit={handleSearch}
            placeholder="Search Exercises"
            type="text"
          />
          <Button
            className="search-btn"
            sx={{
              bgcolor: "#ff2625",
              color: "#fff",
              textTransform: "none",
              width: { lg: "175px", xs: "30%" },
              fontSize: { lg: "20px", xs: "14px" },
              height: "100%",
              alignItems: "center",
              position: "absolute",
              right: "0",
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
        <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
          <HorizontalScrollBar
            bodyParts={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchExercises;
