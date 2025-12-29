import { useState, useEffect } from 'react'
import * as petService from './services/petService'
import './App.css'

function App() {
  const [pets, setPets] = useState([])
  
  useEffect(()=>{
    const getAllPets = async () =>{
      try {
        const data = await petService.index()
        setPets(data)
      } catch (error) {
        console.log(error)
      }

    }
    getAllPets()
  },[])

  return (
    <>
    <h1>HELLO</h1>
    </>
  )
}

export default App
