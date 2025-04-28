import "../styles/Productos.css"

function Card({producto, funcionCarrito}){
    
    function agregarAlCarrito() {
        console.log("Paso 1")
        funcionCarrito(producto)
    }

    return(
        <div className="producto-card" >
            <h1 style={{color:"black"}}>{producto.nombre}</h1>
            <p style={{color:"black"}}>{producto.descripcion}</p>
            <img className="producto-image" src={producto.imagen}></img>
            <p style={{color:"black"}}>{producto.precio} $</p>
            <button onClick={agregarAlCarrito} style={{color:"black"}}>Agregar al carrito</button>
        </div>
    )
}

export default Card