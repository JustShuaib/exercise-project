import { Stack, Typography, Box } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Search from "./Search";

const SearchExercises = ({ exercises, bodyParts, exerciseList, dispatch }) => {
  const handleFilter = (bodyPart) => {
    let modifiedList = [];
    if (bodyPart === "all") {
      modifiedList = [...exerciseList];
    } else {
      modifiedList = exerciseList.filter(
        (exercise) => exercise.bodyPart === bodyPart
      );
    }
    dispatch({ type: "FILTER", payload: modifiedList });
  };

  return (
    <Box>
      <Stack alignItems="center" justifyContent="center" p={2.8}>
        <Typography
          component="h2"
          textAlign="center"
          mb={3}
          mt={{ xs: 2, lg: 20 }}
          sx={{
            fontSize: { lg: "2.5rem", xs: "1.8rem" },
          }}
        >
          Awesome exercises <br /> you should know
        </Typography>
        <Search dispatch={dispatch} exercises={exercises} />
        <HorizontalScrollBar
          bodyParts={bodyParts}
          onFilter={handleFilter}
          isBodyParts
        />
      </Stack>
    </Box>
  );
};

export default SearchExercises;
