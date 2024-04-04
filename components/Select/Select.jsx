import { useState, useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

export default function Select() {
  const card = {
    title: "LG Showrooms",
    copy: "Browse LG Showrooms from around the country.",
    image: "./assets/images/living_room_1.png",
  };
  const options = [
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
    {
      title: "BUSINESS INNOVATION CENTER - CHICAGO",
      link: "https://my.matterport.com/show/?m=Ppm2855Musi",
    },
  ];

  const optionsRef = useRef(null);
  const modalRef = useRef(null);
  const [src, setSrc] = useState("");
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState("");
  const [placeholder, setPlaceholder] = useState("Select a Showroom");

  useOnClickOutside(optionsRef, () => {
    setOpen(false);
  });

  useOnClickOutside(modalRef, () => setOpenModal(false));

  function handleSelect(e) {
    setOpen(!open);
  }

  function handleClickOption(e, option) {
    setSelected(option.title);
    setPlaceholder(option.title);
    setSrc(option.link);
    setOpen(false);
    setOpenModal(true);
  }

  return (
    <>
      <div className="section hero">
        <div className="container-skel">
          <div className="twelve columns ">
            <div className="comp-container hero-card">
              <div className="comp-left">
                <div>
                  <div className="comp-text">
                    <h2>{card.title}</h2>
                    <div className="copy">{card.copy}</div>
                  </div>

                  <div className="select">
                    <div className="input" onClick={handleSelect}>
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
                </div>
              </div>
              <div className="comp-right">
                <div className="right-img">
                  <img src={card.image} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-modal" data-open-modal={openModal}>
        <div className="close-modal">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"></path>
          </svg>
        </div>
        <div className="modal" data-open-modal={openModal} ref={modalRef}>
          <iframe
            src={src}
            title="Matterport Showroom"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          ></iframe>
        </div>
      </div>
    </>
  );
}
