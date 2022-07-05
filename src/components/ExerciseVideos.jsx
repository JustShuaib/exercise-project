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
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {exerciseVideos.slice(0, 6).map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            {/* <Item> */} Test
            {/* <a
              target="_blank"
              rel="noopener"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            </a>
            <Box>
              <Typography variant="h5" color="black">
                {item.video.title}
              </Typography>
              <Typography variant="subtitle1" color="black">
                {item.video.channelName}
              </Typography>
            </Box> */}
            {/* </Item> */}
          </Grid>
        ))}
      </Grid>
      {/* <Stack
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "10px", xs: "10px" } }}
      >
        {exerciseVideos.slice(0, 6).map((item, index) => (
          <Box
            key={index}
            className="exercise-video"
            width={{ xs: "85%", lg: "30%" }}
          >
            <a
              target="_blank"
              rel="noopener"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            </a>
            <Box>
              <Typography variant="h5" color="black">
                {item.video.title}
              </Typography>
              <Typography variant="subtitle1" color="black">
                {item.video.channelName}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack> */}
    </Box>
  );
};

export default ExerciseVideos;
