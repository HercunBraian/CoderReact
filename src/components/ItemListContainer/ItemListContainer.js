import React from "react";

const ItemListContainer = ({greeting, ListProducts}) => {
  return (
    <div>
        <h1>{greeting}</h1>
        <h2>{ListProducts}</h2>
    </div>
  );
};

export default ItemListContainer;
