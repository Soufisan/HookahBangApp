import "./CardSabor.css";
import { useState } from "react";
import Gofre from "../img/gofre.jpeg";
import TartaQueso from "../img/TartaQueso.jpeg";


const CardPostre = () => {
    const [saborText, setSaborText] = useState("");
    const [saborDescription, setSaborDescription] = useState("");

    const Postre = [
        {
            id: 1,
            title: "Gofre",
        },
        {
            id: 2,
            title: "Tarta de queso",
        },


    ];

    return (
        <div>

            <div className="container">
                <img className="img" src={Gofre} alt="Imagen" />
                <div className="number">
                    <p>
                        <b>{Postre[0].id}</b>
                    </p>
                </div>
                <div>
                    <p className="title">
                        <b>{Postre[0].title}</b>
                    </p>
                </div>
            </div>

            <div className="container">
                <img className="img" src={TartaQueso} alt="Imagen" />
                <div className="number">
                    <p>
                        <b>{Postre[1].id}</b>
                    </p>
                </div>
                <div>
                    <p className="title">
                        <b>{Postre[1].title}</b>
                    </p>
                </div>
            </div>



        </div>
    );
};

export default CardPostre;
