// ------------------------------
// Tipos básicos y uniones
// ------------------------------
export type TipoMovimiento = "entrada" | "salida"; 
export type Categoria = "alimentos" | "ropa" | "tecnologia" | "otros";

// Union type para el precio
export type Precio = number | string; 

// ------------------------------
// Intersección de tipos
// ------------------------------
export type InfoBase = {
  codigo: string;
  nombre: string;
};

export type Inventariable = {
  cantidad: number;
  precio: Precio;
};

export type ProductoGenerico = InfoBase & Inventariable & { categoria: Categoria };