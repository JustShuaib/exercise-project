import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { fetchData, exerciseOptions } from "../utils/fetchData";
const EXERCISE_URL = import.meta.env.VITE_RAPID_API_HOST;
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  const fetchExercisesData = async () => {
    try {
      const exerciseDetailData = await fetchData(
        `https://${EXERCISE_URL}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
    } catch {
      setExerciseDetail([]);
    }
  };

  useEffect(() => {
    fetchExercisesData();
  }, []);

  const { name, target, equipment } = exerciseDetail;

  return (
    <Box component="main">
      <Detail exerciseDetail={exerciseDetail} />
      {name && <ExerciseVideos exerciseName={name} />}
      {exerciseDetail && (
        <SimilarExercises target={target} equipment={equipment} />
      )}
    </Box>
  );
};

export default ExerciseDetail;
