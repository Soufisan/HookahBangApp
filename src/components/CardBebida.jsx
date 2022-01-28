import "./CardSabor.css";
import { useState } from "react";
import CocaCola from "../img/CocacolaNormal.png";
import FantaLimon from "../img/FantaLimon.jpg";
import Redbull from "../img/RedBull.png";
import FantaNaranja from "../img/Fanta-Naranja.jpeg";
import Sprite from "../img/sprite.png"
import Nestea from "../img/nestea.jpeg";
import AquarioLimon from "../img/aquarius-limon.jpeg";
import AquarioNaranja from "../img/aquarius-naranja.jpeg";

const CardBebida = () => {
  const [saborText, setSaborText] = useState("");
  const [saborDescription, setSaborDescription] = useState("");

  const Bebidas = [
    {
      id: 2,
      title: "CocoCola",
    },
    {
      id: 3,
      title: "Fanta de Limón",
    },
    {
      id: 1,
      title: "RedBull",
    },
    {
      id: 4,
      title: "Fanta de Naranja",
    },
    {
      id: 5,
      title: "Sprite",
    },
    {
      id: 6,
      title: "nestea",
    },
    {
      id: 7,
      title: "aquario de limon",
    },
    {
      id: 8,
      title: "aquario de naranja",
    },
  ];

  return (
    <div>

      <div className="container">
        <img className="img" src={Redbull} alt="Imagen" />
        <div className="number">
          <p>
            <b>{Bebidas[2].id}</b>
          </p>
        </div>
        <div>
          <p className="title">
            <b>{Bebidas[2].title}</b>
          </p>
        </div>
      </div>

      <div className="container">
        <img className="img" src={CocaCola} alt="Imagen" />
        <div className="number">
          <p>
            <b>{Bebidas[0].id}</b>
          </p>
        </div>
        <div>
          <p className="title">
            <b>{Bebidas[0].title}</b>
          </p>
        </div>
      </div>

      <div className="container">
        <img className="img" src={FantaLimon} alt="Imagen" />
        <div className="number">
          <p>
            <b>{Bebidas[1].id}</b>
          </p>
        </div>
        <div>
          <p className="title">
            <b>{Bebidas[1].title}</b>
          </p>
        </div>
      </div>

      <div className="container">
        <img className="img" src={FantaNaranja} alt="Imagen" />
        <div className="number">
          <p>
            <b>{Bebidas[3].id}</b>
          </p>
        </div>
        <div>
          <p className="title">
            <b>{Bebidas[3].title}</b>
          </p>
        </div>
      </div>

      <div className="container">
        <img className="img" src={Sprite} alt="Imagen" />
        <div className="number">
          <p>
            <b>{Bebidas[4].id}</b>
          </p>
        </div>
        <div>
          <p className="title">
            <b>{Bebidas[4].title}</b>
          </p>
        </div>
      </div>

      <div className="container">
        <img className="img" src={Nestea} alt="Imagen" />
        <div className="number">
          <p>
            <b>{Bebidas[5].id}</b>
          </p>
        </div>
        <div>
          <p className="title">
            <b>{Bebidas[5].title}</b>
          </p>
        </div>
      </div>

      <div className="container">
        <img className="img" src={AquarioLimon} alt="Imagen" />
        <div className="number">
          <p>
            <b>{Bebidas[6].id}</b>
          </p>
        </div>
        <div>
          <p className="title">
            <b>{Bebidas[6].title}</b>
          </p>
        </div>
      </div>

      <div className="container">
        <img className="img" src={AquarioNaranja} alt="Imagen" />
        <div className="number">
          <p>
            <b>{Bebidas[7].id}</b>
          </p>
        </div>
        <div>
          <p className="title">
            <b>{Bebidas[7].title}</b>
          </p>
        </div>
      </div>





    </div>
  );
};

export default CardBebida;
