import { Box, Stack, Typography } from "@mui/material";
import HeadingTwo from "../utils/HeadingTwo";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box
    sx={{
      mt: { lg: "100px", xs: "10px" },
    }}
  >
    <HeadingTwo>Exercises that target the same muscle group</HeadingTwo>
    <Stack
      direction="row"
      mb={{ xs: 4, lg: 6 }}
      sx={{ p: "2", position: "relative" }}
    >
      {targetMuscleExercises.length ? (
        <HorizontalScrollBar bodyParts={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
    <HeadingTwo>Exercises that use the same equipments</HeadingTwo>
    <Stack direction="row" sx={{ p: "2", position: "relative" }}>
      {equipmentExercises.length ? (
        <HorizontalScrollBar bodyParts={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;
