import * as React from "react";
import ReactSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
interface ISlider {
  children?: React.ReactNode;
  settings?: any;
  primary?: string;
}

interface ISlide {
  primary?: string;
}

const Slide = styled(ReactSlider)<ISlide>(({ primary = "#FFFFFF" }) => ({
  width: "1222px",
  margin: "0 15px",
  "@media (max-width: 1180px)": { width: "800px" },
  "@media (max-width: 900px)": { width: "700px" },
  "@media (max-width: 700px)": { width: "600px" },
  "@media (max-width: 600px)": { width: "500px" },
  "@media (max-width: 500px)": { width: "450px" },
  ".slick-slide>div": {
    padding: "0 14px",
    "@media (max-width: 500px)": { padding: "0 5px" },
  },
  ".slick-track": {
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
    height: "auto",
    justifyContent: "center",
  },
  ".slick-slide": {
    width: "100%",
    backgroundColor: "transparent",
    transform: "scale(0.8)",
    transition: "all 0.4s ease-in-out",
    padding: "40px 0",
  },
  ".slick-center": {
    transform: "scale(1.2, 1.5)",
    "@media (max-width: 1180px)": {
      transform: "scale(1.2)",
    },
  },
}));

const Slider: React.FC<ISlider> = ({ children, settings, primary }) => {
  return (
    <Slide primary={primary} {...settings}>
      {children}
    </Slide>
  );
};

export { Slider };
