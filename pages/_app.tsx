import "../styles/LG/lg-default.css";
import "../styles/LG/bootstrap.css";
import "../styles/LG/bootstrap-grid.css";
import "../styles/LG/variables.scss";
import "../styles/LG/navigation.scss";
import "../styles/LG/components.css";
import "../styles/LG/hsad-style.css";
import "../styles/LG/skeleton.css";
import "../styles/LG/slider-style.css";
import "../styles/LG/slick.css";
import "../styles/SJ/fonts.min.css";
import "../styles/SJ/hsad-style.css";
import "../styles/SJ/skeleton.css";
import "../styles/LG/hero-slider.css";
import "../styles/SJ/style.css";
import "../styles/globals.scss";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
