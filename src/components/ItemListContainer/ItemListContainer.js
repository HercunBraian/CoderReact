import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { Loading } from '../Loading/Loading';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from "../services/firebase";
import "../ItemListContainer/ItemListContainer.css"

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
      setLoading(true)

      const collectionRef = categoryId 
          ? query(collection(db, 'products'), where('categoria', '==', categoryId)) 
          : collection(db, 'products')

      getDocs(collectionRef).then(response => {
          const products = response.docs.map(doc => {
              return { id: doc.id, ...doc.data() }
          })
          setProducts(products)
      }).catch(error => {
          console.log(error)
      }).finally(() => {
          setLoading(false)
      })

  }, [categoryId])


  if(loading) {
      return <Loading />
  }

  return(
      <div className='container'>
          <div class="text-center mt-5">
                    <h2 class="linea"><span>TIENDA BHTECH</span></h2>
                </div>
          { 
              products.length > 0 
                  ? <ItemList products={products} />
                  : <h2>No hay productos</h2>
          }
      </div>
  )
}

export default ItemListContainer
