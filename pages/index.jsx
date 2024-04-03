import { useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import Select from "../components/Select/Select";
import { ParallaxProvider } from "react-scroll-parallax";
import { ReactLenis } from "@studio-freight/react-lenis";

const Home = () => {
  const [flow, setFlow] = useState(true);
  return (
    <ReactLenis root>
      <ParallaxProvider>
        <div>
          <button onClick={() => setFlow(!flow)}>Change Style</button>
        </div>
        <div className="hsadpack wrapper">
          {flow ? <Carousel /> : <Select />}
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
