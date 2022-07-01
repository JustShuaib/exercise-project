import { Stack, Typography } from "@mui/material";

const BodyPart = ({ item, bodyPart, onFilter, img }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      backgroundColor: "#fff",
      width: "16.875rem",
      height: "17.5rem",
      gap: "3rem",
      cursor: "pointer",
      borderBottomLeftRadius: "1.4rem",
    }}
    onClick={() => {
      onFilter(item);
      document
        .getElementById("exercises")
        .scrollIntoView({ behavior: "smooth" });
    }}
  >
    <img src={img} alt={img} style={{ width: "2.5rem", height: "2.5rem" }} />
    <Typography
      fontSize="1.5rem"
      fontWeight="bold"
      color="#3a1212"
      height="2.5rem"
      textTransform="capitalize"
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
