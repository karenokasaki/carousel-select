import styles from "./Carousel.module.scss";
import Slider from "react-slick";
import { useState, useRef, useEffect } from "react";

export default function Select() {
  const cards = [
    {
      title: "LG Showrooms",
      copy: "Browse LG Showrooms from around the country.",
      image: "./assets/images/living_room_1.png",
      cta: [
        {
          title: "Lincolnshire BIC",
          link: "https://my.matterport.com/show/?m=xPCUCvby3YJ",
        },
        {
          title: "WYNDHAM 2023",
          link: "https://my.matterport.com/show/?m=aW5iERXkZxM",
        },
        {
          title: "RSNA 2023",
          link: "https://my.matterport.com/show/?m=cYgcKXHxqW4",
        },
      ],
    },
    {
      title: "LG Showrooms",
      copy: "Browse LG Showrooms from around the country.",
      image: "./assets/images/living_room_2.png",
      cta: [
        {
          title: "CEDIA 2023",
          link: "https://my.matterport.com/show/?m=DLFe2Fd5ymc",
        },
        {
          title: "CES PRESS SUITE 2024",
          link: "https://my.matterport.com/show/?m=FSd1CxPSVuu",
        },
        {
          title: "FETC 2024",
          link: "https://my.matterport.com/show/?m=xn8Z11SGVLV",
        },
      ],
    },
    {
      title: "LG Showrooms",
      copy: "Browse LG Showrooms from around the country.",
      image: "./assets/images/living_room_3.png",

      cta: [
        {
          title: "BUSINESS INNOVATION CENTER - CHICAGO",
          link: "https://my.matterport.com/show/?m=Ppm2855Musi",
        },
      ],
    },
  ];
  const [isPlaying, setIsPlaying] = useState(true);
  const progressBar = useRef(null);
  const carousel = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    //autoplay: true,
    //autoplaySpeed: 8000, //slide duration
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slick-hero slider",
    draggable: false,
    initialSlide: 0,
    draggable: false,
    beforeChange: (x) => {
      progressBar.current.children[x].children[0].classList.remove("active");
    },
    afterChange: (x) => {
      progressBar.current.children[x].children[0].classList.add("active");
    },
  };

  useEffect(() => {
    /* on mount add active to the first progress bar */
    if (!progressBar.current && !carousel.current) return;
    progressBar.current.children[0].children[0].classList.add("active");
  }, []);

  function handleClickProgress(e, index) {
    if (carousel.current) carousel.current.slickGoTo(index);
  }

  return (
    <div className="section hero">
      <div className="container-skel">
        <div className="twelve columns ">
          <Slider {...settings} className="" ref={carousel}>
            {cards.map((card, index) => (
              <div className="comp-container hero-card" key={index}>
                <div className="comp-left">
                  <div>
                    <div className="comp-text">
                      <h2>{card.title}</h2>
                      <div className="copy">{card.copy}</div>
                    </div>
                    {/* CTA BTN */}
                    <div className="inner-row">
                      {card.cta.map((cta, index) => (
                        <div className="cta" key={index}>
                          <a
                            data-fancybox
                            data-type="iframe"
                            data-src={cta.link}
                            className="newbtn"
                            data-single-instance={
                              card.cta.length === 1 ? true : false
                            }
                          >
                            {cta.title}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="comp-right">
                  <div className="right-img">
                    <img src={card.image} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* controls */}
        <div className="swiper-controls">
          <div
            className="swiper-controls__wrapper"
            data-state={isPlaying ? "playing" : "paused"}
          >
            <div className="swiper-indicator" ref={progressBar}>
              {" "}
              {cards.map((card, index) => (
                <div
                  className="autoplay-progress"
                  key={index}
                  onClick={(e) => handleClickProgress(e, index)}
                >
                  <div
                    className="progress-bar"
                    onAnimationEnd={() => {
                      if (carousel.current) carousel.current.slickNext();
                    }}
                  />
                </div>
              ))}
            </div>
            <button
              className="swiper-controls__pause"
              onClick={() => {
                setIsPlaying(!isPlaying);
                if (isPlaying) carousel.current.slickPause();
                else carousel.current.slickPlay();
              }}
            >
              {" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
