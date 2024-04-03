import { useState, useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

export default function Select() {
  const cards = [
    {
      title: "LG Showrooms",
      copy: "Browse LG Showrooms from around the country.",
      image: "./assets/images/living_room_1.png",
    },
  ];
  const options = [
    "Lincolnshire BIC",
    "RSNA 2023",
    "CEDIA 2023",
    "FETC 2024",
    "Wyndham 2023",
    "CES Press Suite 2024",
    "Business Innovation Center - Chicago",
  ];

  const optionsRef = useRef(null);

  useOnClickOutside(optionsRef, () => {
    setOpen(false);
  });

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [placeholder, setPlaceholder] = useState("Select a Showroom");

  function handleSelect(e) {
    setOpen(!open);
  }

  return (
    <div className="section hero">
      <div className="container-skel">
        <div className="twelve columns ">
          {cards.map((card, index) => (
            <div className="comp-container hero-card" key={index}>
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
                            selected.includes(option) ? "selected" : ""
                          }`}
                          onClick={() => {
                            setSelected([...selected, option]);
                            setOpen(false);
                            setPlaceholder(option);
                          }}
                        >
                          {option}
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
          ))}
        </div>
      </div>
    </div>
  );
}
