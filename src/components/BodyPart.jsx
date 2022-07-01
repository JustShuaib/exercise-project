import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/logo.png";

const BodyPart = ({ item, bodyPart, onFilter }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      borderTop: bodyPart === item && "4px solid #ff2525",
      backgroundColor: "#fff",
      width: "16.875rem",
      height: "17.5rem",
      gap: "47px",
      cursor: "pointer",
      borderBottomLeftRadius: "20px",
    }}
    onClick={() => {
      onFilter(item);
      document
        .getElementById("exercises")
        .scrollIntoView({ behavior: "smooth" });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: "40px", height: "40px" }} />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      color="#3a1212"
      height="40px"
      textTransform="capitalize"
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
