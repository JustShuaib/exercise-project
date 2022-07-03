import { Stack } from "@mui/material";
import { TailSpin } from "react-loader-spinner";

const Loader = ({ color, home }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
      mt={home && { xs: "4rem", lg: "8rem" }}
    >
      <TailSpin color={color || "grey"} height={80} width={80} />
    </Stack>
  );
};

export default Loader;
