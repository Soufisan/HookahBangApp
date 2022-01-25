import CardSabor from "../components/CardSabor";

const CardList = ({ setSaborDescription, saborText }) => {
  return (
    <>
      <h3>Sabores de tu SHISHA</h3>

      <div className="general">
        <CardSabor />
      </div>
    </>
  );
};

export default CardList;
