import { Link } from "react-router-dom";

function Nav({ productosCarrito }) {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        color: "white",
        padding: "10px",
        width: "100%",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-around",
          margin: 0,
        }}
      >
        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/productos"
            style={{ color: "white", textDecoration: "none" }}
          >
            Productos
          </Link>
        </li>
        <li>
          <Link
            to="/nosotros"
            style={{ color: "white", textDecoration: "none" }}
          >
            Nosotros
          </Link>
        </li>
        <li>
          <Link
            to="/contacto"
            style={{ color: "white", textDecoration: "none" }}
          >
            Contacto
          </Link>
        </li>
        <li>
          <Link
            to="/carrito"
            style={{ color: "white", textDecoration: "none" }}
          >
            Carrito{" "}
            <span>
              {productosCarrito.length > 0 ? productosCarrito.length : ""}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
