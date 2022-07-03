import React, { useReducer, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import Loader from "../components/Loader";
import FallBackUI from "../components/FallBackUI";
const initialState = {
  exercises: [],
  bodyParts: [],
  exerciseList: [],
  error: false,
  loading: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETED":
      const { error, loading, exercises, bodyParts } = action.payload;
      return {
        ...state,
        error,
        loading,
        exercises,
        bodyParts: ["all", ...bodyParts],
        exerciseList: exercises,
      };
    case "LOADING":
      return { ...state, loading: true };
    case "ERROR":
      return { ...state, loading: false, error: action.payload.error };
    case "SEARCH":
      return { ...state, exercises: action.payload };
    case "FILTER":
      return { ...state, exercises: action.payload };
    default:
      return { ...state };
  }
};
const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, error, exercises, bodyParts, exerciseList } = state;
  const fetchExercisesData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const exercisesData = await fetchData(
        `https://${import.meta.env.VITE_RAPID_API_HOST}/exercises`,
        exerciseOptions
      );
      const bodyPartList = [
        ...new Set(exercisesData.map((exercise) => exercise.bodyPart)),
      ];
      dispatch({
        type: "COMPLETED",
        payload: {
          error: false,
          loading: false,
          exercises: exercisesData,
          bodyParts: bodyPartList,
        },
      });
    } catch {
      dispatch({ type: "ERROR", payload: { error: true } });
    }
  };

  useEffect(() => {
    fetchExercisesData();
  }, []);

  if (error) {
    return <FallBackUI retry={fetchExercisesData} />;
  }

  return (
    <Box>
      <HeroBanner />
      <main>
        {loading ? (
          <Loader color="#ff2625" home />
        ) : (
          <>
            <SearchExercises
              dispatch={dispatch}
              exercises={exercises}
              bodyParts={bodyParts}
              exerciseList={exerciseList}
            />
            <Exercises exercises={exercises} />
          </>
        )}
      </main>
    </Box>
  );
};

export default Home;
