import "./CardSabor.css";
import { useState } from "react";
import Gofre from "../img/gofre.jpeg";


const CardPostre = () => {
    const [saborText, setSaborText] = useState("");
    const [saborDescription, setSaborDescription] = useState("");

    const Bebidas = [
        {
            id: 1,
            title: "Gofre",
        },
        {
            id: 2,
            title: "",
        },


    ];

    return (
        <div>

            <div className="container">
                <img className="img" src={Gofre} alt="Imagen" />
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



        </div>
    );
};

export default CardPostre;
