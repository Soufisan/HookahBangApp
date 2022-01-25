import CardSabor from "../components/CardSabor";
import CardBebida from "../components/CardBebida";

const CardList = () => {
  return (
    <>
      <h3>Sabores de tu SHISHA</h3>
      <div className="general">
        <CardSabor />
      </div>

      <h3>Bebidas</h3>
      <div className="general">
        <CardBebida />
      </div>
    </>
  );
};

export default CardList;
