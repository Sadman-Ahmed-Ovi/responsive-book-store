import { useState } from 'react'
import Navbar from './components/Navbar'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Book from './components/Book';
import Category from './components/Category';



function App() {
  

  return (
    <div className=''>
        <Navbar/>
        <Hero/>
        <HeadlineCards/>
        <Book/>
        <Category/>
    </div>
  )
}

export default App
