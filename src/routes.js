import Layout from "@components/layout/Layout"
import CategoriaScreen from "@screens/CategoriaScreen"
import Home from "@screens/Home"
import ProductScreen from "@screens/ProductScreen"
import NostrosScreen from "@screens/NosotrosScreen"
import { useRoutes } from "react-router-dom"
import ContactScreen from "@screens/ContactScreen"
import Gracias from "@screens/Gracias"
import CotizarScreen from "@screens/CotizarScreen"
import GraciasCotizacion from "@screens/GraciasCotizacion"

export const AppRouter=()=>{
    const elements= useRoutes([
        {
            element:<Layout/>,
            path:"/",
            children:[
                {element:<Home/>,index:true},
                {element:<CategoriaScreen/>,path:"/categorias/:categoria"},
                {element:<ProductScreen/>,path:"/productos/:id"},
                {element:<NostrosScreen/> ,path:"/nosotros"},
                {element:<ContactScreen/>,path:"/contacto"},
                {element:<Gracias/>,path:"/gracias/:name"},
                {element:<GraciasCotizacion/>,path:"/graciascotizacion/:name"},

                {element:<CotizarScreen/>,path:"/cotizar"},
                
                
            ]
            
        }
    ])

    return elements

}