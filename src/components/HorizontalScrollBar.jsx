import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Box from "@mui/material/Box";

import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

import All from "../assets/icons/all.png";
import Waist from "../assets/icons/waist.png";
import Shoulder from "../assets/icons/shoulder.png";
import Leg from "../assets/icons/leg.png";
import Foot from "../assets/icons/foot.png";
import Back from "../assets/icons/back.png";
import Chest from "../assets/icons/chest.png";
import Arm from "../assets/icons/arm.png";
import Cardio from "../assets/icons/cardio.png";
import Neck from "../assets/icons/neck.png";
const Icons = [
  All,
  Waist,
  Leg,
  Back,
  Foot,
  Chest,
  Arm,
  Cardio,
  Shoulder,
  Arm,
  Neck,
];

const HorizontalScrollbar = ({ bodyParts, isBodyParts, onFilter }) => (
  <Box sx={{ position: "relative", width: "100%" }}>
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {bodyParts.map((item, index) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={isBodyParts ? item.id : item.name}
          mx="1.5rem"
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              onFilter={onFilter}
              img={Icons[index] || All}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  </Box>
);

export default HorizontalScrollbar;

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Box onClick={() => scrollPrev()} sx={arrowStyles()}>
      <img src={LeftArrowIcon} alt="left arrow" />
    </Box>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Box onClick={() => scrollNext()} sx={arrowStyles("right")}>
      <img src={RightArrowIcon} alt="right arrow" />
    </Box>
  );
};

const arrowStyles = (right) => ({
  position: { lg: "absolute" },
  display: { xs: "none", lg: "block" },
  bottom: "-2.5rem",
  right: right && "3rem",
  color: "#ff2625",
  cursor: "pointer",
  background: "transparent",
  transform: "scale(1.2)",
  transition: "all 0.3s ease-in-out",
  "&: hover": {
    transform: "scale(1.5)",
  },
});
