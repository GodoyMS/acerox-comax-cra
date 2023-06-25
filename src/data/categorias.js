import AbrasivosIcon from "@assets/icons/AbrasivosIcon";
import AtechosIcon from "@assets/icons/AtechosIcon";
import OtrosAccesoriosIcon from "@assets/icons/OtrosAccesoriosIcon";
import PlanchasIcon from "@assets/icons/PlanchasIcon";
import TubosIcon from "@assets/icons/TubosIcon";
import VigasIcon from "@assets/icons/VigasIcon";

export const categories = [
  { id: 99, name: "Vigas", route: "vigas", icon: VigasIcon,image:"/assets/images/vigas/main.webp" },
  { id: 100, name: "Perfiles", route: "perfiles", icon: VigasIcon,image:"/assets/images/perfiles/main.jpg"},
  { id: 101, name: "Planchas", route: "planchas", icon: PlanchasIcon,image:"/assets/images/planchas/main.jpeg" },
  { id: 102, name: "Tubos", route: "tubos", icon: TubosIcon,image:"/assets/images/tubos/main.png" },
  { id: 103, name: "Atechos", route: "atechos", icon: AtechosIcon,image:"/assets/images/atechos/main.jpg" },
  { id: 104, name: "Abrasivos", route: "abrasivos", icon: AbrasivosIcon,image:"/assets/images/abrasivos/main.webp" },
  {
    id: 105,
    name: "Otros accesorios",
    route: "otros-accesorios",
    icon: OtrosAccesoriosIcon,
    image:"/assets/images/otros/main.jpg"
  },
];
