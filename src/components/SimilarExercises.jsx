import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
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
    <Box mt={10} px={2}>
      <HeadingTwo>Exercises that target the same muscle group</HeadingTwo>
      <HorizontalScrollBar bodyParts={targetMuscleExercises} />

      <HeadingTwo mt={2}>Exercises that use the same equipments</HeadingTwo>

      <HorizontalScrollBar bodyParts={equipmentExercises} />
    </Box>
  );
};

export default SimilarExercises;
