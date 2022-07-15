import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Box
    sx={{
      backgroundColor: "green",
      borderTop: "4px solid #ff2625",
      width: "min(85%, 24.4rem)",
      // width: { xs: "100%", lg: "24.4rem" },
      // width: "100%",
      pb: "10px",
      borderBottomLeftRadius: "1.4rem",
      textDecoration: "none",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        transform: "scale(1.1)",
      },
      "& button:hover": {
        color: "#000",
      },
    }}
  >
    <Link to={`exercise/${exercise.id}`}>
      <img
        src={exercise.gifUrl}
        loading="lazy"
        alt={exercise.name}
        width="100%"
      />
    </Link>

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
    >
      {exercise.name}
    </Typography>
  </Box>
);

export default ExerciseCard;
