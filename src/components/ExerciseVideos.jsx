import { Box, Stack, Typography, Grid } from "@mui/material";

import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, exerciseName }) => {
  if (exerciseVideos.length === 0) return <Loader />;
  return (
    <Box sx={{ marginTop: { lg: "12rem", xs: "2rem" } }}>
      <Typography
        variant="h2"
        fontFamily="Josefin Sans"
        fontSize="1.8rem"
        textAlign="center"
        mb="1.5rem"
      >
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {exerciseName}
        </span>{" "}
        exercise videos
      </Typography>
      {/* Exercise videos */}
      <Grid container spacing={{ xs: 4, lg: 8 }} px="2rem">
        {exerciseVideos.map((item, index) => (
          <Grid item xs={12} lg={4} key={index}>
            <a
              target="_blank"
              rel="noopener"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            >
              <img
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
                width="100%"
              />
            </a>
            <Box>
              <Typography
                variant="h3"
                fontSize="1.5rem"
                fontFamily="Josefin Sans"
              >
                {item.video.title}
              </Typography>
              <Typography>{item.video.channelName}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExerciseVideos;
