import { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import HeadingTwo from "../utils/HeadingTwo";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const YOUTUBE_URL = import.meta.env.VITE_RAPID_API_YOUTUBE_HOST;

const SimilarExercises = ({ target, equipment }) => {
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const fetchExercisesVideos = async () => {
    try {
      const exerciseData = await fetchData(
        `https://${YOUTUBE_URL}/exercises`,
        exerciseOptions
      );

      const exercisesMuscle = exerciseData?.filter(
        (exercise) => exercise.target === target
      );
      setTargetMuscleExercises(exercisesMuscle.splice(0, 30));

      const exercisesEquipment = exerciseData?.filter(
        (exercise) => exercise.equipment === equipment
      );
      setEquipmentExercises(exercisesEquipment.splice(0, 30));
    } catch {
      setEquipmentExercises([]);
      setTargetMuscleExercises([]);
    }
  };

  useEffect(() => {
    fetchExercisesVideos();
  }, []);

  if (!targetMuscleExercises.length || !equipmentExercises.length) {
    return <Loader />;
  }
  return (
    <Box mt={10}>
      <HeadingTwo>Exercises that target the same muscle group</HeadingTwo>
      <Stack
        // direction="row"
        mb={{ xs: 4, lg: 6 }}
        sx={{ p: 2, position: "relative" }}
      >
        {<HorizontalScrollBar bodyParts={targetMuscleExercises} />}
      </Stack>
      <HeadingTwo>Exercises that use the same equipments</HeadingTwo>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {<HorizontalScrollBar bodyParts={equipmentExercises} />}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
