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
  height: "400px",
  /* width: "800px", */
  /* height: "auto", */
  /* boxShadow:
    "0px 1.85185px 3.14815px 0px rgba(0, 0, 0, 0.00), 0px 8.14815px 6.51852px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.51852px 25.48148px 0px rgba(0, 0, 0, 0.01), 0px 64.81481px 46.85185px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)", */
  /* margin: "0 15px", */
  /*   "@media (max-width: 1180px)": { width: "800px" },
  "@media (max-width: 900px)": { width: "700px" },
  "@media (max-width: 700px)": { width: "600px" },
  "@media (max-width: 600px)": { width: "500px" },
  "@media (max-width: 500px)": { width: "450px" }, */
  /* ".slick-slide>div": {
    padding: "0 0px",
  }, */
  /* ".slick-vertical": {
    height: "277px",
  },
  ".slick-slide": {
    height: "277px",
  }, */
  /*  ".slick-track": {
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
  }, */
}));

const Slider: React.FC<ISlider> = ({ children, settings, primary }) => {
  return (
    <Slide primary={primary} {...settings}>
      {children}
    </Slide>
  );
};

export { Slider };
