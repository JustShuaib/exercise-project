import React, { useState, useEffect } from "react";
import { Stack, Typography, Box, Button, TextField } from "@mui/material";
const SearchExercises = () => {
  return (
    <Box>
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography
          textAlign="center"
          fontWeight={700}
          mb="50px"
          sx={{
            fontSize: { lg: "44px", xs: "30px" },
          }}
        >
          Awesome Exercises you Should Know
        </Typography>
        <Box position="relative" mb="72px">
          <TextField
            height="76px"
            value=""
            onChange={() => {}}
            placeholder="Search Exercies"
            type="text"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchExercises;
