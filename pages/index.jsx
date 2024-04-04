import { useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import Select from "../components/Select/Select";
import { ParallaxProvider } from "react-scroll-parallax";
import { ReactLenis } from "@studio-freight/react-lenis";

const Home = () => {
  return (
    <ReactLenis root>
      <ParallaxProvider>
        <ComponentWrapper fullWidth>
          <Select />
        </ComponentWrapper>
      </ParallaxProvider>
    </ReactLenis>
  );
};

const ComponentWrapper = ({ children, fullWidth }) => {
  return (
    <div
      style={{
        // maxWidth: `${fullWidth ? "1600px" : "1630px"}`,
        margin: "0 auto",
        width: "100vw",
        height: "100vh",
        padding: `${fullWidth ? "0" : "0 15px "}`,
        display: "flex",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default Home;
