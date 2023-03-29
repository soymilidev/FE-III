import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'


const Home = () => {
   
   
  return (
    <div>
         <h1>Este es el catalogo de menues</h1>
          <Outlet/>
    </div>
  )
}

export default Home