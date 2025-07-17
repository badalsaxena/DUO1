import React, { useEffect } from 'react'
import { supabase } from '../supabaseClient'

const ConnectionTest = () => {
  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase.from('test_table').select().limit(1)

      if (error) {
        console.error('❌ Connection Failed:', error)
      } else {
        console.log('✅ Connected! Sample data:', data)
      }
    }

    testConnection()
  }, [])

  return <h3>Check console for Supabase connection status</h3>
}

export default ConnectionTest
