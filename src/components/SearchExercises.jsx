import React from "react";
import Typography from "@mui/material/Typography";
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
    <>
      <Typography
        component="h2"
        textAlign="center"
        mb={3}
        mt={{ xs: 4, lg: 26 }}
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
    </>
  );
};

export default SearchExercises;
