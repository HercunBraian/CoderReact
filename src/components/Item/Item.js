import "./Item.css";

const Item = ({ nombre, precio, img }) => {
  return (
      
    <div className="itemCard">
      <img className="itemImg" src={img} alt={nombre} />
      <p>{nombre}</p>
      <p><span>$</span>{precio}</p>
    </div>
  );
};

export default Item;
