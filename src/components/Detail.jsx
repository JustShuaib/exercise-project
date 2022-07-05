import { Stack, Button, Typography } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
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
      sx={{ flexDirection: { lg: "row" }, p: "1.25rem", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "2.2rem", xs: "1.25rem" } }}>
        <Typography
          variant="h1"
          textTransform="capitalize"
          fontFamily="Josefin Sans"
          textAlign="center"
          fontSize="2rem"
        >
          {name}
        </Typography>
        <Typography px="1rem">
          Exercises keep you strong. {name || "working out"} is one of the best
          exercises to target your {target || "muscle"}. It will help you
          improve your mood and gain energy.
        </Typography>
        {extraDetail.map((detail) => (
          <Stack
            key={detail.id}
            direction="row"
            gap="1.5rem"
            px="1rem"
            alignItems="center"
          >
            <Button
              disabled
              sx={{
                backgroundColor: "#fff2db",
                borderRadius: "50%",
                width: "6.25rem",
                height: "6.25rem",
              }}
            >
              <img
                src={detail.icon}
                alt={detail.name}
                style={{ width: "3.125rem", height: "3.125rem" }}
              />
            </Button>
            <Typography
              fontFamily="Josefin Sans"
              fontSize="1.5rem"
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
