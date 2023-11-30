import { useState } from "react";

function CrearJugador() {
  const [nombre, setNombre] = useState("");
  const handleSubmit = async () => {
    const body = {
      name: nombre,
    };
    const respuesta = await fetch("http://localhost:8080/jugador/crear", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    console.log(respuesta);
  };
  return (
    <div>
      <h1>Crear Jugador</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default CrearJugador;
