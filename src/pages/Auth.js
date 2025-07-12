import React, { useState } from 'react'
import { supabase } from '../supabaseClient'

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleAuth = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    let result
    if (isLogin) {
      result = await supabase.auth.signInWithPassword({ email, password })
    } else {
      result = await supabase.auth.signUp({ email, password })
    }

    if (result.error) setError(result.error.message)
    setLoading(false)
  }

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  return (
    <div className="auth-container" style={styles.container}>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleAuth} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? 'Please wait...' : isLogin ? 'Login' : 'Register'}
        </button>
      </form>

      <button onClick={handleGoogleLogin} style={styles.googleBtn}>
        Sign in with Google
      </button>

      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <span onClick={() => setIsLogin(!isLogin)} style={styles.toggle}>
          {isLogin ? 'Register' : 'Login'}
        </span>
      </p>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '80px',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9', // Change this to match your site theme
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '12px',
    backgroundColor: '#3f51b5', // Your primary color
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  googleBtn: {
    marginTop: '10px',
    backgroundColor: '#db4437',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
  toggle: {
    color: '#3f51b5',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
}

export default Auth
