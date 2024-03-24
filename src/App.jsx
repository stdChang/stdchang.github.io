import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button'
import Confetti from './Confetti';

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
      <h1>スティーブン・チャン</h1>
      <div className="card">
        <button onClick={() => {
            setCount((count) => count + 1); 
            alert('beans');
          }}>
          count is {count}
        </button>
        <Button variant="contained" href="shucream">
          Shucream wo tabeniikouyo
        </Button>
        <img src = "./src/assets/shucreams.png"> </img>
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
