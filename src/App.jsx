import { useState } from 'react'
import './App.css'
import sistema from './dati.js'
import server from './dati.js'
import avvisi from './dati.js'

function App() {
  console.log("Sulla  pagina: ")
  console.log("In console: ")
  return (
    <>
      <div className="Pannello"><h1>{sistema.nome}</h1></div>
    </>
  )
}

export default App
