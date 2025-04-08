# 🛍️ Mini Amazon - Vite + React + TypeScript + Tailwind

Este proyecto es una implementación de una tienda online estilo Amazon, desarrollada con tecnologías modernas como Vite, React, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla
- **Componentes Reutilizables**: Implementación de componentes comunes
- **Estilos con Tailwind**: Utilización de clases de Tailwind CSS
- **TypeScript**: Tipado estático para mayor seguridad en el código
- **Prettier**: Formateo automático del código

## 🛠️ Configuración del Proyecto

### 1. Estilos con Tailwind CSS

#### Botón Azul - Implementación de Estilos

1. **Método Directo**:

   ```tsx
   <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 transition-all duration-300 text-white p-2 rounded-md">
     Este es un botón azul estilizado con clases por defecto de tailwind
   </button>
   ```

2. **Método con @layer**:

   ```tsx
   <button className="btn-azul">
     Este es un botón azul estilizado con una sola clase utilizando @layer
   </button>
   ```

   Configuración en el archivo de estilos:

   ```css
   @layer components {
     .btn-azul {
       @apply bg-blue-500 cursor-pointer hover:bg-blue-600 transition-all duration-300 text-white p-2 rounded-md;
     }
   }
   ```

### 2. Configuración de Prettier

Se implementó el formateo automático del código mediante la creación del archivo `.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}
```

### 3. Gestión de Git

Para resolver conflictos en el flujo de trabajo Git:

```bash
git merge --no-ff origin/feature/footer-component
```

### 4. Implementación de la Tienda

- **Product Cards**: Diseño y desarrollo de tarjetas de productos
- **Barra de Búsqueda**: Implementación de funcionalidad de búsqueda
- **Grid Responsivo**: Presentación de productos en grid adaptable

### 5. Testing y Optimización

Para generar la versión de producción:

```bash
npm run build
```

## 📦 Estructura del Proyecto

```
src/
├── components/
│   └── common/
│       ├── BotonAzul.tsx
│       ├── ProductCard.tsx
│       └── SearchBar.tsx
├── App.tsx
└── main.tsx
```

## 🚀 Cómo Empezar

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador

## 📝 Licencia

Me encantan los garbanzos
