import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Card } from "@mui/material";

import Loader from "./Loader";
import { fetchData, youTubeOptions } from "../utils/fetchData";
import HeadingTwo from "../utils/HeadingTwo";
const YOUTUBE_URL = import.meta.env.VITE_RAPID_API_YOUTUBE_HOST;

const ExerciseVideos = ({ exerciseName }) => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    try {
      const exerciseVideosData =
        exerciseName &&
        (await fetchData(
          `https://${YOUTUBE_URL}/search?query=${exerciseName}`,
          youTubeOptions
        ));
      setVideos(exerciseVideosData.contents.splice(0, 6));
    } catch {
      setVideos([]);
    }
  };

  useEffect(() => {
    getVideos();
  }, [exerciseName]);

  if (videos.length === 0) return <Loader />;
  return (
    <Box sx={{ marginTop: { lg: "10rem", xs: "3rem" } }}>
      <HeadingTwo>
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {exerciseName}
        </span>{" "}
        exercise videos
      </HeadingTwo>

      {/*  videos */}
      <Grid
        container
        spacing={{ xs: 4, lg: 8 }}
        px="2rem"
        mb={{ xs: 4, lg: 6 }}
      >
        {videos.map((item, index) => (
          <Grid item xs={12} lg={4} key={index}>
            <Card
              sx={{
                minHeight: { lg: "20rem" },
                pb: "0.5rem",
                transition: "all 0.2s ease",
                "&:hover": {
                  transform: { lg: "scale(1.1)" },
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
                },
              }}
            >
              <a
                style={{ textDecoration: "none", color: "#000" }}
                target="_blank"
                rel="noopener"
                href={`https://www.youtube.com/watch?v=${item.video?.videoId}`}
              >
                <img
                  src={item.video?.thumbnails[0].url}
                  alt={item.video?.title}
                  width="100%"
                  style={{ maxHeight: "15rem", objectFit: "cover" }}
                />

                <Typography variant="h3" mb={1} fontSize="1.5rem" px={1.5}>
                  {formatName(item.video?.title)}
                </Typography>
                <Typography px={1.5}>
                  {formatName(item.video?.channelName)}
                </Typography>
              </a>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExerciseVideos;

const formatName = (str) => {
  if (str.length > 65) return str.slice(0, 60) + "...";
  return str;
};
