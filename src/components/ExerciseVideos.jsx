import { Box, Typography, Grid, Card } from "@mui/material";

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
      <Grid
        container
        spacing={{ xs: 4, lg: 8 }}
        px="2rem"
        mb={{ xs: 4, lg: 6 }}
      >
        {exerciseVideos.map((item, index) => (
          <Grid item xs={12} lg={4} key={index}>
            <Card sx={{ minHeight: "20rem" }}>
              <a
                target="_blank"
                rel="noopener"
                href={`https://www.youtube.com/watch?v=${item.video?.videoId}`}
              >
                <img
                  src={item.video?.thumbnails[0].url}
                  alt={item.video?.title}
                  width="100%"
                />
              </a>
              <Box>
                <Typography
                  variant="h3"
                  fontSize="1.5rem"
                  fontFamily="Josefin Sans"
                  px={1.5}
                >
                  {item.video?.title}
                </Typography>
                <Typography fontFamily="Josefin Sans" px={1.5}>
                  {item.video?.channelName}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExerciseVideos;
