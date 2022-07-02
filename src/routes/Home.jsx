import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";

import { exerciseOptions, quoteOptions, fetchData } from "../utils/fetchData";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(false);
  const [bodyParts, setBodyParts] = useState([]);
  const [exerciseList, setExerciseList] = useState([]);

  const fetchExercisesData = async () => {
    try {
      const exercisesData = await fetchData(
        `https://${import.meta.env.VITE_RAPID_API_HOST}/exercises`,
        exerciseOptions
      );
      const bodyPartList = [
        ...new Set(exercisesData.map((exercise) => exercise.bodyPart)),
      ];
      setExercises(exercisesData);
      setExerciseList(exercisesData);
      setBodyParts(["all", ...bodyPartList]);
      setError(false);
    } catch (e) {
      setError(true);
      setBodyParts([]);
    }
  };

  useEffect(() => {
    fetchExercisesData();
  }, []);

  return (
    <Box>
      <HeroBanner />
      <main>
        {error ? (
          <Box textAlign="center" mt={{ xs: "5rem", lg: "10rem" }}>
            <Typography
              fontSize={{ xs: "1.6rem", lg: "2.5rem" }}
              color="#ff2625"
              fontFamily="Josefin Sans"
              gutterBottom
            >
              Something went wrong :(
            </Typography>
            <Button
              onClick={fetchExercisesData}
              size="large"
              variant="contained"
              sx={{ mt: "1rem", bgcolor: "#ff2625" }}
            >
              Retry
            </Button>
          </Box>
        ) : (
          <>
            <SearchExercises
              setExercises={setExercises}
              exercises={exercises}
              setBodyPart={setBodyPart}
              error={error}
              setError={setError}
              bodyParts={bodyParts}
              exerciseList={exerciseList}
            />
            <Exercises exercises={exercises} error={error} />
          </>
        )}
      </main>
    </Box>
  );
};

export default Home;
