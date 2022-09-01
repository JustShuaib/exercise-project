import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import CardBtn from "../utils/CardBtn";

const ExerciseCard = ({ exercise, home }) => (
  <Box
    sx={{
      backgroundColor: "#FFFF",
      borderTop: "4px solid #ff2625",
      width: "min(100%, 24.4rem)",
      pb: "0.7rem",
      borderBottomLeftRadius: "1.6rem",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        transform: { xs: "scale(1)", lg: "scale(1.1)" },
      },
      "& button:hover": {
        color: "#000",
      },
    }}
  >
    <Link
      to={home ? `exercise/${exercise.id}` : "/exercise/" + exercise.id}
      style={{ textDecoration: "none", color: "#000", width: "100%" }}
    >
      <img
        src={exercise.gifUrl}
        loading="lazy"
        alt={exercise.name}
        width={home ? "100%" : "auto"}
      />

      <Stack direction="row">
        <CardBtn background="#ffa9a9">{exercise.bodyPart}</CardBtn>
        <CardBtn background="#fcc757">{exercise.target}</CardBtn>
      </Stack>
      <Typography
        ml="1.4rem"
        mt="0.7rem"
        textTransform="capitalize"
        fontSize="1.4rem"
        color="#000"
        pb="0.6rem"
      >
        {exercise.name}
      </Typography>
    </Link>
  </Box>
);

export default ExerciseCard;
