import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
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

const HorizontalScrollbar = ({ bodyParts, isBodyParts, onFilter }) => {
  const [screen, setScreen] = React.useState(innerWidth);
  React.useEffect(() => {
    const resize = () => setScreen(innerWidth);
    addEventListener("resize", resize);
    return () => {
      removeEventListener("resize", resize);
    };
  }, [innerWidth]);

  return (
    <Swiper
      slidesPerView={
        isBodyParts ? (screen < 1024 ? "auto" : 4) : screen < 1024 ? "auto" : 3
      }
      spaceBetween={32}
      navigation={true}
      modules={[Navigation]}
    >
      {bodyParts.map((item, index) => (
        <SwiperSlide key={index}>
          {isBodyParts ? (
            <BodyPart
              item={item}
              onFilter={onFilter}
              img={Icons[index] || All}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default HorizontalScrollbar;
