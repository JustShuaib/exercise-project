import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(false);
  const fetchExercisesData = () => {};
  return (
    <Box>
      <HeroBanner />
      <main>
        {error ? (
          <Box textAlign="center">
            <Typography
              fontSize={{ xs: "1.6rem", lg: "2.5rem" }}
              color="#ff2625"
              fontFamily="Josefin Sans"
              gutterBottom
            >
              {error}
            </Typography>
            <Button
              onClick={fetchExercisesData}
              size="large"
              variant="contained"
              sx={{ bgcolor: "#ff2625" }}
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
            />
            <Exercises
              bodyPart={bodyPart}
              exercises={exercises}
              error={error}
            />
          </>
        )}
      </main>
    </Box>
  );
};

export default Home;
