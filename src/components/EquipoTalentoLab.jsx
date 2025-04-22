import "../styles/Equipo.css";

function EquipoTalentoLab({ equipo }) {
  return (
    <>
      {equipo.map((persona) => (
        <div key={persona.nombre} className="team-container">
          <h1>{persona.nombre}</h1>
          <p>{persona.rol}</p>
          <img className="team-image" src={persona.imagen} />
        </div>
      ))}
    </>
  );
}

export default EquipoTalentoLab;
