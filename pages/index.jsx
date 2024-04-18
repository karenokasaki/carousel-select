import { useState } from "react";
import Select from "../components/Select/Select";
import Select2 from "../components/Select2/Select2";
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
        <ComponentWrapper fullWidth>
          {/* {flow ? <Select2 /> : <Select />} */}
          <Select2 />
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
        padding: `${fullWidth ? "0" : "0 15px "}`,
        display: "flex",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default Home;
