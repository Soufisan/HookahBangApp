import "./CardSabor.css";
import Bombon from '../img/Bombon.jpg'
import Cortado from '../img/Cortado.jpeg'
import CafeLeche from '../img/CafeLeche.jpeg'
import Descafeinado from '../img/descafeinado.jpeg'
import Canario from '../img/Canario.jpeg'

const CardCafes = () => {

    const Cafes = [
        {
            id: 1,
            title: "Café con leche",
        },
        {
            id: 2,
            title: "Cortado",
        },
        {
            id: 3,
            title: "Bombón",
        },
        {
            id: 4,
            title: "Canario",
        },
        {
            id: 5,
            title: "Café Descafeinado",
        },




    ];
    return (
        <div>

            <div className="container">
                <img className="img" src={CafeLeche} alt="Imagen" />
                <div className="number">
                    <p>
                        <b>{Cafes[0].id}</b>
                    </p>
                </div>
                <div>
                    <p className="title">
                        <b>{Cafes[0].title}</b>
                    </p>
                </div>
            </div>

            <div className="container">
                <img className="img" src={Cortado} alt="Imagen" />
                <div className="number">
                    <p>
                        <b>{Cafes[1].id}</b>
                    </p>
                </div>
                <div>
                    <p className="title">
                        <b>{Cafes[1].title}</b>
                    </p>
                </div>
            </div>


            <div className="container">
                <img className="img" src={Bombon} alt="Imagen" />
                <div className="number">
                    <p>
                        <b>{Cafes[2].id}</b>
                    </p>
                </div>
                <div>
                    <p className="title">
                        <b>{Cafes[2].title}</b>
                    </p>
                </div>
            </div>

            <div className="container">
                <img className="img" src={Canario} alt="Imagen" />
                <div className="number">
                    <p>
                        <b>{Cafes[3].id}</b>
                    </p>
                </div>
                <div>
                    <p className="title">
                        <b>{Cafes[3].title}</b>
                    </p>
                </div>
            </div>

            <div className="container">
                <img className="img" src={Descafeinado} alt="Imagen" />
                <div className="number">
                    <p>
                        <b>{Cafes[4].id}</b>
                    </p>
                </div>
                <div>
                    <p className="title">
                        <b>{Cafes[4].title}</b>
                    </p>
                </div>
            </div>





        </div>
    )
}

export default CardCafes
