Práctica Vite-Tailwind-GitFlow

1.- Botón azul con clases de tailwind

- Por defecto en el la etiqueta button

  `<button className='bg-blue-500 cursor-pointer hover:bg-blue-600 transition-all duration-300 text-white p-2 rounded-md'>
    Este es un botón azul estilizado con clases por defecto de tailwind
  </button>
`

- A través de un @layer usando una clase para agregar los estilos
  `<button className='btn-azul'>Este es un botón azul estilizado con una sola clase utilizando @layer</button>`

      `@layer components {
        .btn-azul {
          @apply bg-blue-500 cursor-pointer hover:bg-blue-600 transition-all duration-300 text-white p-2 rounded-md;
        }
      }
      `

  2.- guardar automáticamente cuadno se guarda el archivo con prettier

      -creación de archivo .prettierrc

      {
      "semi": true,
      "singleQuote": true,
      "tabWidth": 2

  }

  3.- Solucionar conflictos

  git merge --no-ff origin/feature/footer-component

  Aceptar todos los cambios

  4.- Elaborar mini amazon

  Product cards y eso jaja

  5.- Testing y optimización

  ejecutar npm run build
