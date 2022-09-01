import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ detail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = detail;
  const extraDetail = [
    {
      id: "1",
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      id: "2",
      icon: TargetImage,
      name: target,
    },
    {
      id: "3",
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="3.75rem"
      sx={{
        flexDirection: { lg: "row" },
        p: "1.25rem",
        alignItems: { xs: "center", lg: "flex-start" },
      }}
      justifyContent="space-around"
    >
      <Box width={{ lg: "50%" }}>
        <img src={gifUrl} alt={name} loading="lazy" width="100%" />
      </Box>
      <Stack sx={{ gap: { xs: "1.25rem", lg: "2.2rem" } }}>
        <Typography
          variant="h1"
          textTransform="capitalize"
          textAlign="center"
          fontSize={{ xs: "2rem", lg: "2.5rem" }}
        >
          {name}
        </Typography>
        <Typography px={2} fontSize={{ lg: "1.4rem" }}>
          Exercises keep you strong. {name || "working out"} is one of the best
          exercises to target your {target || "muscle"}. <br />
          It will help you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((detail) => (
          <Stack
            key={detail.id}
            direction="row"
            gap="1.5rem"
            px={2}
            alignItems="center"
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                backgroundColor: "#fff2db",
                borderRadius: "50%",
                width: { xs: "4rem", lg: "6.25rem" },
                height: { xs: "4rem", lg: "6.25rem" },
              }}
            >
              <img src={detail.icon} alt={detail.name} width="60%" />
            </Stack>
            <Typography
              fontSize={{ xs: "1.2rem", lg: "1.5rem" }}
              textTransform="capitalize"
            >
              {detail.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
