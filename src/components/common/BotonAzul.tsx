import React from 'react'

export const BotonAzul = () => {
  return (
    <div className='flex w-4xl mx-auto flex-col gap-4'>
        <button className='bg-blue-500 cursor-pointer hover:bg-blue-600 transition-all duration-300 text-white p-2 rounded-md'>Este es un botón azul estilizado con clases por defecto de tailwind</button>
        <button className='btn-azul'>Este es un botón azul estilizado con una sola clase utilizando @layer</button>
    </div>
  )
}
