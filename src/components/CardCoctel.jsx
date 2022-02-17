import "./CardSabor.css";
import Mojito from '../img/Mojito.gif'


const CardCoctel = () => {

    const Coctel = [
        {
            id: 1,
            title: "Mojito",
        },




    ];
    return (
        <div>

            <div className="container">
                <img className="img" src={Mojito} alt="Imagen" />
                <div className="number">
                    <p>
                        <b>{Coctel[0].id}</b>
                    </p>
                </div>
                <div>
                    <p className="title">
                        <b>{Coctel[0].title}</b>
                    </p>
                </div>
            </div>





        </div>
    )
}

export default CardCoctel
