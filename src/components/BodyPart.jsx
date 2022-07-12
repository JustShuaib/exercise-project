import { Stack, Typography } from "@mui/material";

const BodyPart = ({ item, onFilter, img }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    sx={stackStyles}
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
      fontFamily="Josefin Sans"
      fontWeight="bold"
      color="#ff2625"
      height="2.5rem"
      textTransform="capitalize"
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;

const stackStyles = {
  backgroundColor: "#fff",
  width: "16.875rem",
  height: "17.5rem",
  gap: "3rem",
  mx: { lg: "1rem" },
  cursor: "pointer",
  borderBottomLeftRadius: "1.4rem",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
};
