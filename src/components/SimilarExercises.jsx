import React, { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import HeadingTwo from "../utils/HeadingTwo";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const YOUTUBE_URL = import.meta.env.VITE_RAPID_API_YOUTUBE_HOST;

const SimilarExercises = ({ target, equipment }) => {
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetchData(`https://${YOUTUBE_URL}/exercises`, exerciseOptions)
        .then((data) => {
          const muscles = data.filter((exercise) => exercise.target === target);
          const equipments = data.filter(
            (exercise) => exercise.equipment === equipment
          );
          setEquipmentExercises(equipments);
          setTargetMuscleExercises(muscles);
        })
        .catch(() => {
          setEquipmentExercises([]);
          setTargetMuscleExercises([]);
        });
    };
    getData();
  }, [target, equipment]);

  if (targetMuscleExercises.length === 0 || equipmentExercises.length === 0) {
    return <Loader />;
  }
  return (
    <Box mt={10}>
      <HeadingTwo>Exercises that target the same muscle group</HeadingTwo>
      <Stack mb={{ xs: 4, lg: 6 }} sx={{ p: 2, position: "relative" }}>
        <HorizontalScrollBar bodyParts={targetMuscleExercises} />
      </Stack>

      {/* <HeadingTwo>Exercises that use the same equipments</HeadingTwo>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        <HorizontalScrollBar bodyParts={equipmentExercises} />
      </Stack> */}
    </Box>
  );
};

export default SimilarExercises;
