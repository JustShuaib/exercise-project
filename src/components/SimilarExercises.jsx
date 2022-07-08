import { Box, Stack, Typography } from "@mui/material";
import HeadingTwo from "../utils/HeadingTwo";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  if (!targetMuscleExercises.length || !equipmentExercises.length) {
    return <Loader />;
  }
  return (
    <Box mt={10}>
      <HeadingTwo>Exercises that target the same muscle group</HeadingTwo>
      <Stack
        direction="row"
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
