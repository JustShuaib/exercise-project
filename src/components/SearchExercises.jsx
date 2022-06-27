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

  const handleSearch = async (e) => {
    e.preventDefault();
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
      setBodyPart(search);
      setExercises(searchExercises);
      document
        .getElementById("exercises")
        .scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box>
      <Stack alignItems="center" justifyContent="center" p="1.4rem">
        <Typography
          component="h2"
          textAlign="center"
          fontWeight={700}
          mb="3.125rem"
          mt={{ xs: "2rem", lg: "10rem" }}
          sx={{
            fontSize: { lg: "2.5rem", xs: "1.8rem" },
          }}
        >
          Awesome Exercises you <br /> Should Know
        </Typography>
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
        <Box sx={{ position: "relative", width: "100%", p: "1.2rem" }}>
          <HorizontalScrollBar
            bodyParts={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            isBodyParts
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchExercises;
