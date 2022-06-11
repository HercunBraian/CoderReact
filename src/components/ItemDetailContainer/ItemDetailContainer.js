import { useState, useEffect } from "react";
import { dataProductsId } from "../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();

  const { productId } = useParams()

  useEffect(() => {
    dataProductsId(productId).then(response => {
      setProduct(response);
    })
  }, []);

  return (
    <>
      <h1>Detalle del producto</h1>
      <ItemDetail {...product} />
    </>
  );
};

export default ItemDetailContainer;
