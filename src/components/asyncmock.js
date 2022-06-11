import F1 from "../components/assets/img/F1.png"
import F2 from "../components/assets/img/F2.png"
import F3 from "../components/assets/img/F3.png"
import F4 from "../components/assets/img/F4.png"

const products = [
  {
    id: '1',
    nombre: "IceCream",
    desc: "Chocolate & Vainilla",
    precio: 12.5,
    img: F1,
    categoria: 'helado',
  },
  {
    id: '2',
    nombre: "Strawberries",
    desc: "Fresh Strawerries",
    precio: 14.5,
    img: F2,
    categoria: "frutas",
  },
  {
    id: '3',
    nombre: "Chicken Kebab",
    desc: "Mixed Kebab Plate",
    precio: 12.0,
    img: F3,
    categoria: "hamburguesas",
  },
  {
    id: '4',
    nombre: "Fish Kebab",
    desc: "Mixed Fish Kebab",
    precio: 11.0,
    img: F4,
    categoria: "pezcado",
  }
];

export const dataProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const dataProductsByCategory = (categoryId) => {
  return new Promise ((resolve, reject) => {
      setTimeout(() => {
          resolve(products.filter(prod => prod.categoria === categoryId))
      }, 500)
  })
}

export const dataProductsId = (id) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(products.find(prod => prod.id === id))
      }, 500)
  })
}
