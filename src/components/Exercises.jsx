import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { exerciseOptions, fetchData } from "../utils/fetchData";
const Exercises = ({ exercises, bodyPart, setExercises }) => {
  return (
    <Box id="exercises" mt="50px" p="20px" xs={{ mt: { lg: "110px" } }}>
      {" "}
      <Typography mb="46px" fontSize="">
        {" "}
        Showing Result
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
