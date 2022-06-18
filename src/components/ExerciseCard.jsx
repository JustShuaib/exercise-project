import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { borderRadius } from "@mui/system";
const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} loading="lazy" alt={exercise.name} />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            borderRadius: "20px",
            textTransform: "capitalize",
            fontSize: "14px",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            borderRadius: "20px",
            textTransform: "capitalize",
            fontSize: "14px",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        mt="11px"
        textTransform="capitalize"
        fontSize="20px"
        color="#000"
        fontWeight="bold"
        pb="10px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
