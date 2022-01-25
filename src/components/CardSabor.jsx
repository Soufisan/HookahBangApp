import "./CardSabor.css";
import Hawaii from "../img/Hawaii.jpg";
import Exotic from "../img/Exotic.jpg";
import { useState } from "react";

const CardSabor = () => {
  const [saborText, setSaborText] = useState("");
  const [saborDescription, setSaborDescription] = useState("");

  const Sabores = [
    {
      id: 1,
      title: "Hawaii",
      description: "Piña, Mango y Menta",
    },
    {
      id: 2,
      title: "Love 66",
      description: "6 Sabores exóticos y menta",
    },
    {
      id: 3,
      title: "Moon Dream",
      description: "Vainilla, chicle, canela y menta",
    },
    {
      id: 4,
      title: "Lady killer",
      description: "Melocotón, mango, menta y hielo",
    },
    {
      id: 5,
      title: "Wood kizz",
      description: "chicle, canela y menta",
    },
    {
      id: 6,
      title: "Blue yellow",
      description: "Melón y arándano",
    },
    {
      id: 7,
      title: "Dolar",
      description: "Uva y cereza",
    },
    {
      id: 8,
      title: "Over the rainbow",
      description: "Pera y menta",
    },
    {
      id: 9,
      title: "White caek",
      description: "Tarta de queso y caramelo",
    },
    {
      id: 10,
      title: "Lamenciaga",
      description: "Limón, menta y té verde",
    },
    {
      id: 11,
      title: "Mi amor",
      description: "Mezcla debayas, plátano y hielo",
    },
    {
      id: 12,
      title: "Pablo",
      description: "Lima y arándanos",
    },
  ];

  return (
    <div>
      <div className="container">
        <img className="img" src={Hawaii} alt="Imagen" />
        <div className="number">
          <p>
            <b>{Sabores[0].id}</b>
          </p>
        </div>
        <p className="title">{Sabores[0].title}</p>
        <p className="description">{Sabores[0].description}</p>
      </div>

      <div className="container">
        <img className="img" src={Exotic} alt="Imagen" />
        <div className="number">
          <p>
            <b>{Sabores[1].id}</b>
          </p>
        </div>
        <p className="title">{Sabores[1].title}</p>
        <p className="description">{Sabores[1].description}</p>
      </div>

      <div className="container">
        <img className="img" src={Exotic} alt="Imagen" />
        <div className="number">
          <p>
            <b>{Sabores[2].id}</b>
          </p>
        </div>
        <p className="title">{Sabores[2].title}</p>
        <p className="description">{Sabores[2].description}</p>
      </div>

      <div className="container">
        <img className="img" src={Exotic} alt="Imagen" />
        <div className="number">
          <p>
            <b>{Sabores[3].id}</b>
          </p>
        </div>
        <p className="title">{Sabores[3].title}</p>
        <p className="description">{Sabores[3].description}</p>
      </div>

      <div className="container">
        <img className="img" src={Exotic} alt="Imagen" />
        <div className="number">
          <p>
            <b>{Sabores[4].id}</b>
          </p>
        </div>
        <p className="title">{Sabores[4].title}</p>
        <p className="description">{Sabores[4].description}</p>
      </div>

      <div className="container">
        <img className="img" src={Exotic} alt="Imagen" />
        <div className="number">
          <p>
            <b>{Sabores[5].id}</b>
          </p>
        </div>
        <p className="title">{Sabores[5].title}</p>
        <p className="description">{Sabores[5].description}</p>
      </div>

      <div className="container">
        <img className="img" src={Exotic} alt="Imagen" />
        <div className="number">
          <p>
            <b>{Sabores[6].id}</b>
          </p>
        </div>
        <p className="title">{Sabores[6].title}</p>
        <p className="description">{Sabores[6].description}</p>
      </div>

      <div className="container">
        <img className="img" src={Exotic} alt="Imagen" />
        <div className="number">
          <p>
            <b>{Sabores[7].id}</b>
          </p>
        </div>
        <p className="title">{Sabores[7].title}</p>
        <p className="description">{Sabores[7].description}</p>
      </div>

      <div className="container">
        <img className="img" src={Exotic} alt="Imagen" />
        <div className="number">
          <p>
            <b>{Sabores[8].id}</b>
          </p>
        </div>
        <p className="title">{Sabores[8].title}</p>
        <p className="description">{Sabores[8].description}</p>
      </div>

      <div className="container">
        <img className="img" src={Exotic} alt="Imagen" />
        <div className="number">
          <p>
            <b>{Sabores[9].id}</b>
          </p>
        </div>
        <p className="title">{Sabores[9].title}</p>
        <p className="description">{Sabores[9].description}</p>
      </div>

      <div className="container">
        <img className="img" src={Exotic} alt="Imagen" />
        <div className="number">
          <p>
            <b>{Sabores[10].id}</b>
          </p>
        </div>
        <p className="title">{Sabores[10].title}</p>
        <p className="description">{Sabores[10].description}</p>
      </div>

      <div className="container">
        <img className="img" src={Exotic} alt="Imagen" />
        <div className="number">
          <p>
            <b>{Sabores[11].id}</b>
          </p>
        </div>
        <p className="title"><b>{Sabores[11].title}</b></p>
        <p className="description">b{Sabores[11].description}</p>
      </div>
    </div>
  );
};

export default CardSabor;
