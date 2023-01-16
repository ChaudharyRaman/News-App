import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import News from './components/News'
import Navbar from './components/Navbar'
import Box from '@mui/material/Box'

function App() {
  const [data, setData] = useState()

  const fetchData = async () => {
    console.log('mounted');
    // console.log(import.meta.env.VITE_NEWS_API_KEY);
    // const {data} = await axios.get('/.netlify/functions/getData')
    try {

      const data  = await axios.get('/.netlify/functions/getTopHeadLines')
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    return () => {
      fetchData()
      console.log('unmounted');
    }
  })

  return (
    <Box width={'100%'} height={'100%'} bgcolor={'#292a2d'} >
      <Navbar />
      <News />
    </Box>
  )
}

export default App
