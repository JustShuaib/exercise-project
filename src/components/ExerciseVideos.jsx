import React from "react";
import { Box, Stack, Typography } from "@mui/material";
const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos?.length)
    return (
      <Typography
        variant="h5"
        component="h2"
        fontWeight={700}
        textAlign="center"
      >
        Loading exercise videos...
      </Typography>
    );
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "10px" } }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            target="_blank"
            rel="noopener"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="black">
                {item.video.title}
              </Typography>
              <Typography variant="subtitle1" color="black">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
