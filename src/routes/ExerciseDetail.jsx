import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { fetchData, exerciseOptions, youTubeOptions } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  const fetchExercisesData = async () => {
    const EXERCISE_URL = import.meta.env.VITE_RAPID_API_HOST;
    const YOUTUBE_URL = import.meta.env.VITE_RAPID_API_YOUTUBE_HOST;
    try {
      const exerciseDetailData = await fetchData(
        `https://${EXERCISE_URL}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
    } catch {
      setExerciseDetail([]);
    }
    try {
      const exerciseVideosData = await fetchData(
        `https://${YOUTUBE_URL}/search?query=${exerciseDetail.name}`,
        youTubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);
    } catch {
      setExerciseVideos([]);
    }
    try {
      const exerciseData = await fetchData(
        `https://${YOUTUBE_URL}/exercises`,
        exerciseOptions
      );
      const exercisesMuscle = exerciseData?.filter(
        (exercise) => exercise.target === exerciseDetail.target
      );
      console.log(exerciseData);
      setTargetMuscleExercises(exercisesMuscle.splice(0, 30));

      const exercisesEquipment = exerciseData?.filter(
        (exercise) => exercise.equipment === exerciseDetail.equipment
      );
      setEquipmentExercises(exercisesEquipment.splice(0, 30));
    } catch {
      setEquipmentExercises([]);
      setTargetMuscleExercises([]);
    }
  };
  useEffect(() => {
    fetchExercisesData();
  }, []);
  /*   useEffect(() => {
    fetchExercisesData();
  }, [id]);
 */
  return (
    <Box component="main">
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        exerciseName={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
