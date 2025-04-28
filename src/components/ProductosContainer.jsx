import { useState } from "react"
import "../styles/Productos.css"
import Card from "./Card"
import Carrito from "./Carrito"

function ProductosContainer({productos}){
    const [productosCarrito, setProductosCarrito] = useState([])

    function funcionCarrito(producto){
        console.log("Paso 2")
        console.log(productosCarrito)
        const nuevoCarrito = [...productosCarrito, producto]; // Solución 
        setProductosCarrito(nuevoCarrito)
        console.log(productosCarrito)
    }

    return(
        <div>
            <div className="productos-conteiner">
                {productos.map((producto) => (
                    <Card
                        producto={producto}
                        funcionCarrito={funcionCarrito}
                    />
                ))}
            </div>
{            <div className="carrito-conteiner">
                <Carrito
                    productos={productosCarrito}    
                />
            </div>}
        </div>
    )
}


export default ProductosContainer

