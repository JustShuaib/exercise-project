import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (_, value) => {
    setCurrentPage(value);
    document.getElementById("exercises").scrollIntoView({ behavior: "smooth" });
  };
  if (exercises.length === 0)
    return (
      <Box id="exercises" textAlign="center">
        <Typography fontSize={{ xs: "1.4rem", lg: "1.8rem" }}>
          No such exercise exist :(
        </Typography>
      </Box>
    );
  return (
    <Box id="exercises" sx={{ mt: { xs: "3.125rem", lg: "6.875rem" } }}>
      <Typography
        mb="2.875rem"
        pl={{ lg: "3rem" }}
        textAlign={{ xs: "center", lg: "left" }}
        fontSize="2rem"
        fontWeight={700}
      >
        Showing Exercises
      </Typography>

      {/* Exercises list */}
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          gap: "3rem",
        }}
        p="1rem"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} home />
        ))}
      </Stack>

      {/* Pagination */}
      <Stack mt="6.25rem" alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
