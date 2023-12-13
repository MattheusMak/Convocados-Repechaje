import CrearJugador from "./pages/CrearJugador"

import jsonJugadores from "./JugadoresLista.js"

import Jugador from "./Jugadores.jsx"

function App (){
  const listaJugadores = jsonJugadores.map(Jugador =>
    <Jugador infoJugador = {Jugador}/>)
    return (
      <div>
        <h1>
          |Jugadores Convocados|
        </h1>
        {listaJugadores}
      </div>
    )
}

export default App