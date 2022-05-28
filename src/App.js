import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting='LOCAL DE COMIDA' ListProducts='Lista de Productos'/>
      
    </div>
  );
}

export default App;
