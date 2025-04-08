import React from 'react';
import { Likes } from './Likes';

interface ProductCardProps {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
}

export const ProductCard = ({ nombre, precio, imagen }: ProductCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 bg-white">
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-48 object-cover rounded"
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-black text-xl mb-2">{nombre}</h3>
        <p className="text-gray-700 text-base mb-2">${precio.toFixed(2)}</p>
        <Likes />
      </div>
    </div>
  );
};
