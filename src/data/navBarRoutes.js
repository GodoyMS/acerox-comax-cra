import { categories } from "./categorias";


export const navBarRoutes = [
  { id: 0, name: "Inicio", route: "/" },
  { id: 1, name: "Nosotros", route: "/nosotros" },
  {
    id: 2,
    name: "Productos",
    route: "/productos",
    products: categories
  },
  { id: 3, name: "Contacto", route: "/contacto" },
];
