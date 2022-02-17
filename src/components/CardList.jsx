import CardSabor from "../components/CardSabor";
import CardBebida from "../components/CardBebida";
import CardZumo from "./CardZumo";
import CardBatidos from "./CardBatidos";
import CardPostre from "./CardPostre";
import CardCafes from "./CardCafes";
import CardTe from "./CardTe";
import CardCoctel from "./CardCoctel";


const CardList = () => {
  return (
    <>
      <h3>Sabores de tu SHISHA</h3>
      <div className="general">
        <CardSabor />
      </div>

      <h3>Refrescos</h3>
      <div className="general">
        <CardBebida />
      </div>

      <h3>Zumos</h3>
      <div className="general">
        <CardZumo />
      </div>

      <h3>cocktail</h3>
      <div className="general">
        <CardCoctel />
      </div>

      <h3>Batidos</h3>
      <div className="general">
        <CardBatidos />
      </div>


      <h3>Postre</h3>
      <div className="general">
        <CardPostre />
      </div>

      <h3>Cafés</h3>
      <div className="general">
        <CardCafes />
      </div>

      <h3>Té</h3>
      <div className="general">
        <CardTe />
      </div>


    </>
  );
};

export default CardList;
