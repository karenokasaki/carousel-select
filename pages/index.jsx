import { useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import Select from "../components/Select/Select";
import { ParallaxProvider } from "react-scroll-parallax";
import { ReactLenis } from "@studio-freight/react-lenis";

const Home = () => {
  const [disableLenis, setDisableLenis] = useState(null);

  return (
    <ReactLenis root>
      <ParallaxProvider>
        <div className="hsadpack wrapper" data-lenis-prevent={disableLenis}>
          <Carousel />
          <Select />
        </div>
      </ParallaxProvider>
    </ReactLenis>
  );
};

const ComponentWrapper = ({ children, fullWidth }) => {
  return (
    <div
      style={{
        maxWidth: `${fullWidth ? "1600px" : "1630px"}`,
        margin: "0 auto",
        width: "100%",
        padding: `${fullWidth ? "0" : "0 15px "}`,
      }}
    >
      {children}
    </div>
  );
};

export default Home;
