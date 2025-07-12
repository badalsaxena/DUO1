import React, { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient' // Adjust path if needed

const PatientList = () => {
  const [patients, setPatients] = useState([])

  useEffect(() => {
    const fetchPatients = async () => {
      const { data, error } = await supabase.from('patients').select()
      if (error) {
        console.error('Error fetching patients:', error)
      } else {
        setPatients(data)
      }
    }

    fetchPatients()
  }, [])

  return (
    <div>
      <h2>Patients</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>{patient.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default PatientList
