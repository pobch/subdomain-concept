import React, { useEffect } from 'react'
import axios from 'axios'

function App() {
  function handlePost() {
    async function postMsg() {
      try {
        const res = await axios.post('http://api.pob.com/postmsg', {}, { withCredentials: true })
        console.log('Resp', res.data)
      } catch (e) {
        console.log('Error', e)
      }
    }

    postMsg()
  }

  function handleGet() {
    async function getHome() {
      try {
        const res = await axios.get('http://api.pob.com/', { withCredentials: true })
        console.log('Resp', res.data)
      } catch (e) {
        console.log('Error', e)
      }
    }

    getHome()
  }

  return (
    <div>
      <h1>Client Side, Hi there!</h1>
      <button onClick={handlePost}>Post msg</button>
      <br />
      <button onClick={handleGet}>Get</button>
    </div>
  )
}

export default App
