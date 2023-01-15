import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState()

  const fetchData = async ()=>{
      const {data} = await axios.get('/.netlify/functions/getData')

      console.log(Object.values(data));
      setData(Object.values(data)[0].text)
  }

  useEffect(()=>{
    return()=>{
      fetchData()
      console.log('unmounted');
    }
  })

  return (
    <div className="App">
      HII THERE -- {data}
    </div>
  )
}

export default App
