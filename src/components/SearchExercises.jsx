import React, { useState, useEffect } from "react";
import { Stack, Typography, Box, Button, TextField } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import Loader from "./Loader";

const SearchExercises = ({
  bodyPart,
  setBodyPart,
  exercises,
  setExercises,
  error,
  setError,
}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [exerciseList, setExerciseList] = useState([]);

  const fetchExercisesData = async () => {
    try {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const bodyPartList = [
        ...new Set(exercisesData.map((exercise) => exercise.bodyPart)),
      ];
      setExercises(exercisesData);
      setExerciseList(exercisesData);
      setBodyParts(["all", ...bodyPartList]);
      setError("");
    } catch (e) {
      setError(`${e.message} exercises`);
      setBodyParts([]);
    }
  };

  useEffect(() => {
    fetchExercisesData();
  }, []);

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
      setBodyPart(searchTerm);
      setExercises(searchExercises);
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
    setExercises(modifiedList);
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
        <Box sx={{ position: "relative", width: "100%", p: "1.2rem" }}>
          {bodyParts.length === 0 && !error ? (
            <Loader color="#ff2625" />
          ) : (
            <HorizontalScrollBar
              bodyParts={bodyParts}
              onFilter={handleFilter}
              bodyPart={bodyPart}
              isBodyParts
            />
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchExercises;
