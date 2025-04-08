import React, { useState } from 'react';
import './App.css';
import { BotonAzul } from './components/common/BotonAzul';
import { SearchBar } from './components/common/SearchBar';
import { ProductCard } from './components/common/ProductCard';

const productos = [
  {
    id: 1,
    nombre: 'Flores bonitas',
    precio: 19.99,
    imagen: 'https://picsum.photos/200/300?grayscale',
  },
  {
    id: 2,
    nombre: 'Perrito bonito',
    precio: 29.99,
    imagen: 'https://picsum.photos/id/237/200/300',
  },
  {
    id: 3,
    nombre: 'Edificios bonitos',
    precio: 39.99,
    imagen: 'https://picsum.photos/id/238/200/300',
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>Hola mundo footer</h1>
      <h1>Hola mundo header</h1>
      <br />
      <BotonAzul />
      <br />
      <div className="container mx-auto px-4">
        <h1 className="text-8xl font-bold text-center my-8">Mini Amazon</h1>
        <SearchBar onSearch={setSearchTerm} />
        <div className="grid grid-cols-1 my-8 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((producto) => (
            <ProductCard key={producto.id} {...producto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
