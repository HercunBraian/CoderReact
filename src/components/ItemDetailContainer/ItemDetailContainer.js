import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'

import { db } from "../services/firebase";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();

  const { productId } = useParams()

  useEffect(() => {
      const docRef = doc(db, 'products', productId)
      getDoc(docRef).then(doc => {
        const productsFormatted = {id: doc.id, ...doc.data()}
        setProduct(productsFormatted)
      }).catch(error => {
        console.log(error)
      })
  }, [productId]);

  return (
    <>
      <ItemDetail {...product} />
    </>
  );
};

export default ItemDetailContainer;
