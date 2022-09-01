import { Stack } from "@mui/material";
import { TailSpin } from "react-loader-spinner";

const Loader = ({ home }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
      mt={home && { xs: "4rem", lg: "12rem" }}
    >
      <TailSpin color="#ff2625" height={60} width={60} />
    </Stack>
  );
};

export default Loader;
