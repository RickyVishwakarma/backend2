import { useState } from 'react'
import './App.css'

import axios from 'axios'
import cors from 'cors'
import { useEffect } from 'react'

app.use(cors())
function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
  })

  return (
    <>
      
     <div>
        <h1>Chain and link</h1>
        <p>JOKES: {jokes.length}</p>

        {
          jokes.map((joke, index) => (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </div>
          ))
        }
     </div>
     
    </>
  )
}

export default App
