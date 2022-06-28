import { Stack } from "@mui/material";
import { TailSpin } from "react-loader-spinner";

const Loader = ({ color }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <TailSpin color={color || "grey"} height={80} width={80} />
    </Stack>
  );
};

export default Loader;
