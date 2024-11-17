import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Confetti from './Confetti';
import { AppBar, Button, Box, Icon, IconButton, Menu, MenuItem, MenuList, Toolbar, Typography } from '@mui/material'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const pages = ['About Me', 'Projects', 'Skillset', 'Resume'];

function App() {
  const [count, setCount] = useState(0);
  const [anchorNav, setAnchorNav] = useState(null);
  const openMenu = (onClick) => {
    setAnchorNav(onClick.currentTarget);
  };
  const closeMenu=()=>{
    setAnchorNav(null);
  };
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <div>
      <Confetti></Confetti>
      </div> */} 

      <AppBar position='static'>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='watashi no ie' sx={{display:{xs: 'none', md: 'flex'}}}>
              <HomeRoundedIcon/>
            </IconButton>
            <Typography variant='6' component='div' sx={{flexGrow: 1, display:{xs: 'none', md: 'flex'}}}> Youkoso, watashi no website </Typography>
            <Box sx={{display:{xs: 'none', md: 'flex'}}}>
              <Button color='inherit'>About Me</Button>
              <Button color='inherit'>Projects</Button>
              <Button color='inherit'>Skillset</Button>
              <Button color='inherit'>Resume</Button>
              {/* {pages.map((page)=>(
               <Button color='inhert' key={page}>{page}</Button> 
              ))}  */}
            </Box>
            <Box sx={{display:{xs: 'flex', md: 'none'}}}>
              <IconButton size='large' edge='start' color='inherit' onClick={openMenu}>
                <MenuRoundedIcon/>
              </IconButton>
              <Menu open={Boolean(anchorNav)} onClose={closeMenu} sx={{display:{xs: 'flex', md: 'none'}}}>
                <MenuList>
                  <MenuItem>About Me</MenuItem>
                  <MenuItem>Projects</MenuItem>
                  <MenuItem>Skillset</MenuItem>
                  <MenuItem>Resume</MenuItem>
                  {/* {pages.map((page)=>(<MenuItem key={page}>{page}</MenuItem>))} */}
                </MenuList>
              </Menu>
            </Box>

            <IconButton size='large' edge='start' color='inherit' aria-label='watashi no ie' sx={{display:{xs: 'flex', md: 'none'}}}>
              <HomeRoundedIcon/>
            </IconButton>
            <Typography variant='6' component='div' sx={{flexGrow: 1, display:{xs: 'flex', md: 'none'}}}> Youkoso, watashi no website </Typography>
          </Toolbar>
        </AppBar>


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
      </div>
      <p> Edit <code>src/App.jsx</code> and save to test HMR </p>
      <p className="read-the-docs">
        Handcrafted by Steven Chang for 5 hours
      </p>
    </>
  )
}

export default App
