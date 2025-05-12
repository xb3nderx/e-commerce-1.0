import "../styles/Carrito.css";
import { useEffect, useState } from "react";
import CarritoCard from "./CarritoCard.jsx";

export default function Carrito({ productosCarrito, funcionBorrar }) {
  console.log("Productos: " + productosCarrito);

  const total = productosCarrito.reduce(
    (subTotal, producto) => subTotal + producto.price * producto.cantidad,
    0
  );

  function funcionDisparadora(id) {
    funcionBorrar(id);
  }

  console.log("Total: " + total);

  return (
    <div className="carrito-conteiner">
      <div className="carrito-titulos">
        <h2 className="carrito-titulo-producto"> Producto </h2>
        <h2 className="carrito-titulo-descripcion">Descripción</h2>
        <h2> </h2>
        <h2> Cantidad </h2>
        <h2> Precio unitario </h2>
        <h2> Sub total </h2>
        <h2> </h2>
      </div>
      {productosCarrito.length > 0 ? (
        productosCarrito.map((producto) => (
          <CarritoCard
            producto={producto}
            funcionDisparadora={funcionDisparadora}
          />
        ))
      ) : (
        <p>Carrito vacio</p>
      )}
      {total > 0 ? <span>Total a pagar: {total.toFixed(2)} $</span> : <></>}
    </div>
  );
}
