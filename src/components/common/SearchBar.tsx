import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center gap-6 justify-center">
      <input
        className="border-2 rounded-full w-96 border-gray-300 p-2"
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 w-24 cursor-pointer rounded-full text-white p-2"
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  );
};
