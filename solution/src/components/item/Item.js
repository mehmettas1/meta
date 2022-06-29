import "./Item.css";

const Item = ({ card }) => {
  const { name, img, option } = card;
  return (
    <div className="card">
      <img className="card-logo" src={img} alt={name} />
      <h3 className="card-title">{name}</h3>
    </div>
  );
};
    
export default Item;