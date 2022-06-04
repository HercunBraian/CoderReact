import React from "react";
import { useState, useEffect } from "react";
import { dataProducts } from "../asyncmock";
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({props}) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    dataProducts().then(response => {
      setProducts(response)
    })
  }, [])


  return (
    <div>
        <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
