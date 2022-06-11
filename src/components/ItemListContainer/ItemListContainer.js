import React from "react";
import { useState, useEffect } from "react";
import { dataProducts, dataProductsByCategory } from "../asyncmock";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { Loading } from '../Loading/Loading';

const ItemListContainer = ({props}) => {

  const [products, setProducts] = useState([]);
  const { categoryId } = useParams ()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    if(!categoryId){
      dataProducts().then(response => {
        setProducts(response)
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        setLoading(false)
      })
    } else {
      dataProductsByCategory(categoryId).then(response => {
        setProducts(response)
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        setLoading(false)
      })
    }
  }, [categoryId])


  if(loading){
    return <Loading />
  
  }


  return (
    <div>
        <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
