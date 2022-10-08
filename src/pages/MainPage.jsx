import React from 'react'
import Atsiliepimai from '../components/Atsiliepimai'
import Button from '../components/Button'
import Slider from '../components/Slider'
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
    <Slider/>
    <Link to="/produktai"><Button/></Link>
    <Atsiliepimai/>
    </>
    
  )
}

export default MainPage