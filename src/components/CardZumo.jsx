import "./CardSabor.css";
import { useState } from "react";
import Pina from "../img/pina.jpeg";
import Melocoton from "../img/melocoton.png";


const CardZumo = () => {
    const [saborText, setSaborText] = useState("");
    const [saborDescription, setSaborDescription] = useState("");

    const Bebidas = [
        {
            id: 1,
            title: "Zumo Melocotón",
        },
        {
            id: 2,
            title: "Zumo Piña",
        },


    ];

    return (
        <div>

            <div className="container">
                <img className="img" src={Melocoton} alt="Imagen" />
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
                <img className="img" src={Pina} alt="Imagen" />
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





        </div>
    );
};

export default CardZumo;
