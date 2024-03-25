import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button'
import Confetti from './Confetti';
import { Box } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
      <Confetti></Confetti>
      </div>

      <Box component="section" justifyItems = 'center' sx={{p: 2}}>
        <button onClick={() => {
            setCount((count) => count + 1); 
            alert('beans');
          }}>
          count is {count}
        </button>
        
        <Button variant="contained" href="shucream">
          Shucream wo tabeniikouyo
        </Button>
        </Box>

      <div className="card">
        <Box component="section" justifyItems = 'center' sx={{width: 600, height: 600}}>
          {/* Honest to god I need to learn how to use the box component sx and other properties */}
          <img src = "/img/coolportrait.jpg" width = "600" height="450"/>
          <h1>スティーブン・チャン</h1>  
        </Box>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Handcrafted by Steven Chang for 5 hours
      </p>
    </>
  )
}

export default App
