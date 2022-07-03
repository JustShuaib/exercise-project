import { Box, Typography, Button } from "@mui/material";
import SickIcon from "@mui/icons-material/Sick";
import HeroBanner from "./HeroBanner";

const FallBackUI = ({ retry }) => (
  <Box>
    <HeroBanner />
    <main>
      <Box textAlign="center" mt={{ xs: "5rem", lg: "10rem" }}>
        <Typography
          fontSize={{ xs: "1.6rem", lg: "2.5rem" }}
          color="#ff2625"
          fontFamily="Josefin Sans"
          gutterBottom
        >
          Something went wrong :(
        </Typography>
        <Button
          onClick={retry}
          size="large"
          variant="contained"
          sx={{ mt: "1rem", bgcolor: "#ff2625" }}
          endIcon={<SickIcon />}
        >
          Retry
        </Button>
      </Box>
    </main>
  </Box>
);

export default FallBackUI;
