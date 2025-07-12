import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'
import Auth from './pages/Auth'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data }) => {
      setUser(data?.session?.user || null)
    })

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <div className="App">
      {user ? (
        <h2>Welcome, {user.email}</h2>
      ) : (
        <Auth /> // This will show the login/register page
      )}
    </div>
  )
}

export default App
