import { useState, useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

export default function Select2() {
  const [card, setCard] = useState({
    title: "LG Showrooms",
    copy: "Discover LG's nationwide virtual showrooms for an immersive exploration of innovation and technology.",
    image: "./assets/images/showroom2.png",
  });
  const options = [
    {
      title: "LINCOLNSHIRE BIC",
      link: "https://my.matterport.com/show/?m=xPCUCvby3YJ",
      image: "",
    },
    {
      title: "WYNDHAM 2023",
      link: "https://my.matterport.com/show/?m=aW5iERXkZxM",
      image: "",
    },
    {
      title: "RSNA 2023",
      link: "https://my.matterport.com/show/?m=cYgcKXHxqW4",
      image: "",
    },
    {
      title: "CEDIA 2023",
      link: "https://my.matterport.com/show/?m=DLFe2Fd5ymc",
      image: "",
    },
    {
      title: "CES PRESS SUITE 2024",
      link: "https://my.matterport.com/show/?m=FSd1CxPSVuu",
      image: "",
    },
    {
      title: "FETC 2024",
      link: "https://my.matterport.com/show/?m=xn8Z11SGVLV",
      image: "",
    },
    {
      title: "BUSINESS INNOVATION CENTER - CHICAGO",
      link: "https://my.matterport.com/show/?m=Ppm2855Musi",
      image: "",
    },
  ];

  const optionsRef = useRef(null);
  const modalRef = useRef(null);
  const [src, setSrc] = useState("");
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState("");
  const [placeholder, setPlaceholder] = useState("Select a Showroom");
  const [imageOnDisplay, setImageOnDisplay] = useState([
    "./assets/images/showroom2.png",
    "./assets/images/showroom.png",
  ]);

  useOnClickOutside(optionsRef, () => {
    setOpen(false);
  });

  //useOnClickOutside(modalRef, () => setOpenModal(false));

  function handleSelect(e) {
    e.stopPropagation();
    setOpen((prev) => !prev);
  }

  function handleClickOption(e, option) {
    setSelected(option.title);
    setPlaceholder(option.title);
    setSrc(option.link);
    setOpen(false);
    changeImages();
  }

  function handleOk(e) {
    if (!src) return;
    setOpenModal(true);
  }

  function changeImages() {
    const bg = document.querySelector(".comp-container");
    const compText = document.querySelector(".comp-text").querySelector("h2");
    const copy = document.querySelector(".comp-text").querySelector("div");
    const img1 = document.querySelector(".comp-img-1");
    const img2 = document.querySelector(".comp-img-2");

    // Adicionando uma classe para ativar a transição
    bg.classList.add("transition-bg");
    compText.classList.add("transition-text");
    copy.classList.add("transition-text");
    img1.classList.add("transition-img");
    img2.classList.add("transition-img");

    if (card.image === "/assets/images/showroom.png") {
      setCard({ ...card, image: "/assets/images/showroom2.png" });
      bg.style.backgroundImage = `url("/assets/images/blur-background2.png")`;
      compText.style.color = "#fff";
      copy.style.color = "#fff";
      img1.style.opacity = 1; // Esconde a primeira imagem
      img1.style.height = "auto";
      img2.style.height = 0;
      img2.style.opacity = 0; // Mostra a segunda imagem
    } else {
      setCard({ ...card, image: "/assets/images/showroom.png" });
      bg.style.backgroundImage = `url("/assets/images/blur-background.png")`;
      compText.style.color = "#000000";
      copy.style.color = "#000000";
      img1.style.opacity = 0; // Mostra a primeira imagem
      img2.style.opacity = 1; // Esconde a segunda imagem

      img1.style.height = 0;
      img2.style.height = "auto";
    }

    // Aguarde um curto período para garantir que a transição CSS seja aplicada antes de remover a classe de transição
    setTimeout(() => {
      bg.classList.remove("transition-bg");
      compText.classList.remove("transition-text");
      copy.classList.remove("transition-text");
      img1.classList.remove("transition-img");
      img2.classList.remove("transition-img");
    }, 1000); // Ajuste o tempo conforme necessário
  }

  return (
    <>
      <div className="comp-container" data-option={true}>
        <div className="comp-left">
          <div>
            <div className="comp-text" data-option={true}>
              <h2>{card.title}</h2>
              <div className="copy">{card.copy}</div>
            </div>

            <div className="inputs">
              <div className="select">
                <div className="input" onMouseDown={handleSelect}>
                  <p>{placeholder}</p>
                  <img
                    src="./assets/images/arrow-down.png"
                    alt=""
                    data-open={open}
                    className="arrow"
                  />
                </div>
                <div className="options" data-open={open} ref={optionsRef}>
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className={`option ${
                        selected === option.title ? "selected" : ""
                      }`}
                      onClick={(e) => handleClickOption(e, option)}
                    >
                      {option.title}
                    </div>
                  ))}
                </div>
              </div>

              <div className="ok-btn">
                <button onClick={handleOk} type="button" data-selected={!!src}>
                  <img src="/assets/images/ArrowLeft.png" alt="arrow left" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="comp-right">
          <div className="right-img">
            <picture>
              <source
                srcSet="/assets/images/showroom2-tablet.png"
                media="(max-width: 950px)"
              />
              <img
                src={"/assets/images/showroom2.png"}
                alt=""
                className="comp-img-1"
              />
              <img
                src={"/assets/images/showroom.png"}
                alt=""
                className="comp-img-2"
              />
            </picture>
          </div>
        </div>
      </div>

      <div className="container-modal" data-open-modal={openModal}>
        <div className="close-modal" onClick={() => setOpenModal(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"></path>
          </svg>
        </div>
        <div className="modal" data-open-modal={openModal} ref={modalRef}>
          <iframe
            src={src}
            title="Matterport Showroom"
            width="90%"
            height="90%"
            style={{ border: "none" }}
          ></iframe>
        </div>
      </div>
    </>
  );
}
