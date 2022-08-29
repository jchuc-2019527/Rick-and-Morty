import React from 'react'
import CharacterList from '../characterList/CharacterList'
import Backdrop from '@mui/material/Backdrop';

const Main = () => {
   
  return <div className='bg-dark text-white' >
      <h1 className='text-center display-1 py-4'>Personajes de Rick and Morty</h1>

      <CharacterList />
      
    </div>
  
}

export default Main