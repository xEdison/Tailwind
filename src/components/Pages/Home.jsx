import React from 'react'
import { Header } from '../Layouts/Header/Header'
import { Main } from '../Layouts/Main/Main'
import {Footer} from '../Layouts/Footer/Footer'
import { One } from '../One/One'
import { Cards } from '../Cards/Cards'
import fondo from '../../assets/fondo.png'
import Slider from '../Slider/Slider'
export const Home = () => {
  return (
    <>
    <Header>
        <h1 className='text-5xl text-white'>El Blog de Edison</h1>
    </Header>
  <Main>
    <div className='border-4 border-blue-800  ml-10  w-1/2 mt-16 h-full'>
    <One/>
    </div>
    <div className='ml-2 w-1/2 flex flex-direction: row; border-4 border-blue-800  mt-6  bg-no-repeat bg-cover ' /*style={{backgroundImage: `url(${fondo})`, filter: 'brightness(0.7)'}} */ >
    <Cards/>
    </div>
    

  </Main>
  <Slider/>
  <Footer>
      <p className='flex justify-center items-center text-lg font-bold bg-blue-800 h-20'>Siempre Blessd, si sabe</p>
  </Footer>
   </>
  )
}
