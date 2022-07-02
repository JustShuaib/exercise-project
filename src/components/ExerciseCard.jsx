import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Link to={`exercise/${exercise.id}`} className="exercise-card">
    <img src={exercise.gifUrl} loading="lazy" alt={exercise.name} />
    <Stack direction="row">
      <Button
        sx={{
          ml: "1.4rem",
          color: "#fff",
          background: "#ffa9a9",
          borderRadius: "20px",
          textTransform: "capitalize",
          fontSize: "0.8rem",
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          ml: "1.4rem",
          color: "#fff",
          background: "#fcc757",
          borderRadius: "20px",
          textTransform: "capitalize",
          fontSize: "0.8rem",
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      ml="1.4rem"
      mt="0.7rem"
      textTransform="capitalize"
      fontSize="1.4rem"
      color="#000"
      pb="0.6rem"
      fontFamily="Josefin Sans"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
