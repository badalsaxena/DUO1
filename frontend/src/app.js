// App.js
import React, { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

const App = () => {
  const [bikes, setBikes] = useState([])
  const [user, setUser] = useState(null)

  // ✅ Fetch all bikes
  const fetchBikes = async () => {
    const { data, error } = await supabase.from('bikes').select('*')
    if (error) {
      console.error('Error fetching bikes:', error)
    } else {
      setBikes(data)
    }
  }

  // ✅ Add a new booking
  const addBooking = async (userId, bikeId) => {
    const { data, error } = await supabase
      .from('bookings')
      .insert([{ user_id: userId, bike_id: bikeId, date: new Date() }])
    if (error) {
      console.error('Booking failed:', error)
    } else {
      console.log('Booking success:', data)
    }
  }

  // ✅ Sign in a user (hardcoded for demo)
  const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'user@example.com', // replace with actual user
      password: 'your-password'   // replace with actual password
    })
    if (error) {
      console.error('Login failed:', error)
    } else {
      console.log('User:', data.user)
      setUser(data.user)
    }
  }

  // ✅ Get current logged-in user
  const getCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
  }

  useEffect(() => {
    fetchBikes()
    getCurrentUser()
  }, [])

  return (
    <div>
      <h1>🚲 Available Bikes</h1>
      <ul>
        {bikes.map((bike) => (
          <li key={bike.id}>
            {bike.name} - ₹{bike.price_per_hour}
            {user && (
              <button onClick={() => addBooking(user.id, bike.id)}>Book</button>
            )}
          </li>
        ))}
      </ul>

      {!user && (
        <button onClick={signIn}>Login to Book</button>
      )}
    </div>
  )
}

export default App
