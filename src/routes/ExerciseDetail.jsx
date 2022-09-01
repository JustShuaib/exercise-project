import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { fetchData, exerciseOptions } from "../utils/fetchData";
const EXERCISE_URL = import.meta.env.VITE_RAPID_API_HOST;

const ExerciseDetail = () => {
  const [detail, setDetail] = useState({
    name: "",
    target: "",
    equipment: "",
  });
  const { id } = useParams();
  const fetchExercisesData = async () => {
    try {
      const detailData = await fetchData(
        `https://${EXERCISE_URL}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setDetail(detailData);
    } catch {
      setDetail({});
    }
  };

  useEffect(() => {
    fetchExercisesData();
  }, []);

  const { name, target, equipment } = detail;

  return (
    <Box component="main">
      <Detail detail={detail} />
      <ExerciseVideos exerciseName={name} />
      <SimilarExercises target={target} equipment={equipment} />
    </Box>
  );
};

export default ExerciseDetail;
