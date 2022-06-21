import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "10px" },
      }}
    >
      <Typography variant="h3" fontSize="2rem" textAlign="center" mb="5">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar bodyParts={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" fontSize="2rem" textAlign="center" mb="5">
        Exercises that use the same Equipments
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollBar bodyParts={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
