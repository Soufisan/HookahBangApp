import "./CardSabor.css";
import Moruno from '../img/TeMoruno.jpeg'


const CardTe = () => {

    const Te = [
        {
            id: 1,
            title: "Té Moruno",
        },




    ];
    return (
        <div>

            <div className="container">
                <img className="img" src={Moruno} alt="Imagen" />
                <div className="number">
                    <p>
                        <b>{Te[0].id}</b>
                    </p>
                </div>
                <div>
                    <p className="title">
                        <b>{Te[0].title}</b>
                    </p>
                </div>
            </div>





        </div>
    )
}

export default CardTe
