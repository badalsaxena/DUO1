import React from 'react'
import PatientList from './components/PatientList' // Adjust if needed
import ConnectionTest from './components/ConnectionTest'

function App() {
  return (
    <div className="App">
      <h1>Supabase + React Demo</h1>
      <PatientList />
      <ConnectionTest />
    </div>
  )
}

export default App
