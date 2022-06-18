import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} loading="lazy" alt={exercise.name} />
    </Link>
  );
};

export default ExerciseCard;
