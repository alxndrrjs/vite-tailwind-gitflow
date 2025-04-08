Práctica Vite-Tailwind-GitFlow

1.- Botón azul con clases de tailwind 
  - Por defecto en el la etiqueta button
  
    `<button className='bg-blue-500 cursor-pointer hover:bg-blue-600 transition-all duration-300 text-white p-2 rounded-md'>
        Este es un botón azul estilizado con clases por defecto de tailwind
      </button>
    `

  - A través de un @layer usando una clase para agregar todas
    `<button className='btn-azul'>Este es un botón azul estilizado con una sola clase utilizando @layer</button>

    @layer components {
      .btn-azul {
        @apply bg-blue-500 cursor-pointer hover:bg-blue-600 transition-all duration-300 text-white p-2 rounded-md;
      }
    }
    `

