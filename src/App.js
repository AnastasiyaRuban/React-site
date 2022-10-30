import { Header } from './components/header/Header';
import React from 'react';
import { Hero } from './components/body/Hero.jsx';
import { AppBar, Toolbar } from '@mui/material';
import { Container } from '@mui/system';
import { ClassNames } from '@emotion/react';

function App() {
  return (
    // <div className='container'>
    //   <Header />
    //   <Hero />
    //   <Button variant='text'>Text</Button>
    //   <Button variant='contained'>Contained</Button>
    //   <Button variant='outlined'>Outlined</Button>
    // </div>
    <AppBar position='fixed'>
      <Container fixed>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton}></IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default App;
