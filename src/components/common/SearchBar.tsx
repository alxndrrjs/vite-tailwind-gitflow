import React from 'react';

export const SearchBar = () => {
  return (
    <div className="flex items-center gap-6 justify-center">
      <input
        className="border-2 rounded-full w-96 border-gray-300 p-2"
        type="text"
        placeholder="Buscar productos..."
      />
      <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 w-24 cursor-pointer rounded-full text-white p-2">
        Buscar
      </button>
    </div>
  );
};
