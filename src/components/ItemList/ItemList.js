import Item from "../Item/Item";
import "../Item/Item.css";

const ItemList = ({ products }) => {
    return(
        <div className="itemList">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;