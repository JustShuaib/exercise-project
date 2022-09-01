import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import { ThreeDots } from "react-loader-spinner";
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
  if (Object.keys(detail).length === 0) {
    return (
      <Stack
        component="main"
        justifyContent="center"
        height="50vh"
        width="100%"
        bgcolor="#fff3f4"
        alignItems="center"
      >
        <ThreeDots color="#ff2625" width={100} height={100} />
      </Stack>
    );
  }
  return (
    <Box component="main">
      <Detail detail={detail} />
      <ExerciseVideos exerciseName={name} />
      <SimilarExercises target={target} equipment={equipment} />
    </Box>
  );
};

export default ExerciseDetail;
