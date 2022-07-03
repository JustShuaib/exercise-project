import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";

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

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ bodyParts, isBodyParts, onFilter }) => {
  if (bodyParts.length > 0) {
    return (
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {bodyParts.map((item, index) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 0.5rem"
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
    );
  }
};

export default HorizontalScrollbar;
