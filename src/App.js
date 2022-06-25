import React, {createContext, useState} from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CartProvider} from './context/CartContext'
import { NotificacionProvider } from './components/notification/Notificacion';
import Cart from './components/Cart/Cart';

export const Context = createContext();

function App() {

  return (
    <div>
      <NotificacionProvider>
        <CartProvider>
            <BrowserRouter>
              <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/cart' element={<Cart />}/>
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </NotificacionProvider>
    </div>
  );
}

export default App;
