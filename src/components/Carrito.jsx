import Card from "./Card";
import "../styles/Carrito.css"
import { useState } from "react";

export default function Carrito({productos}) {

    //const [productosCarrito, setProductosCarrito] = useState(productos)

    return(
        <div className="carrito-conteiner">
            {console.log(productos.length)}
            {productos.length > 0 ? productos.map((producto) => (
                <Card producto={producto} />
            )) 
            : <p>Carrito vacio</p>}
        </div>
    )
}