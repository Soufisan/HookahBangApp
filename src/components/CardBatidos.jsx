import "./CardSabor.css";
import { useState } from "react";
import Chocolate from "../img/smoothie-chocolate.jpeg";
import Fresa from "../img/smoothie-fresa.jpeg";
import Aguacate from "../img/smoothie-aguacate.jpeg";
import Platano from "../img/smoothie-platano.jpeg";


const CardBatidos = () => {
    const [saborText, setSaborText] = useState("");
    const [saborDescription, setSaborDescription] = useState("");

    const Bebidas = [
        {
            id: 1,
            title: "Batido chocolate",
        },
        {
            id: 2,
            title: "Batido fresa",
        },
        {
            id: 3,
            title: "Batido aguacate",
        },
        {
            id: 4,
            title: "Batido plátano",
        },



    ];

    return (
        <div>

            <div className="container">
                <img className="img" src={Chocolate} alt="Imagen" />
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
                <img className="img" src={Fresa} alt="Imagen" />
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
                <img className="img" src={Aguacate} alt="Imagen" />
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
                <img className="img" src={Platano} alt="Imagen" />
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







        </div>
    );
};

export default CardBatidos;
