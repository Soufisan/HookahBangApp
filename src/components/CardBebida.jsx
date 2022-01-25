import "./CardSabor.css";
import { useState } from "react";
import CocaCola from "../img/CocacolaNormal.png";
import FantaLimon from "../img/FantaLimon.jpg";
import Redbull from "../img/RedBull.png";

const CardBebida = () => {
  const [saborText, setSaborText] = useState("");
  const [saborDescription, setSaborDescription] = useState("");

  const Bebidas = [
    {
      id: 1,
      title: "CocoCola",
    },
    {
      id: 2,
      title: "Fanta de Limón",
    },
    {
      id: 3,
      title: "RedBull",
    },
    {
      id: 4,
      title: "Té moruno",
    },
  ];

  return (
    <div>
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
    </div>
  );
};

export default CardBebida;
