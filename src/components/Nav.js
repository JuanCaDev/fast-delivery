/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';

import {
  Link
} from 'react-router-dom';

// import Button from './Button';

import options from '../data/options';
import logo from "../assets/images/logo.png";


function Nav() {
  const menuItems = React.createRef();

  const [active, setActive] = useState(true);
  // const [width, setWidth] = useState(0);

  const handleClick = () => {
    setActive(!active);
    console.log(active)
    // menuItems.current.classList.toggle('max-h-auto')
    // menuItems.current.classList.toggle('max-h-0')
    // menuItems.current.classList.toggle('overflow-hidden')
  }

  useEffect(() => {
    // Creamos una función para actualizar el estado con el clientWidth
    const updateWidth = () => {
      const w = document.body.clientWidth
      // setWidth(w)
      // console.log(document.body.clientWidth)
      // console.log(width)

      if (w < '1024') {
        setActive(false)
      } else {
        setActive(true)
      }

      // console.log('Active: ', active)
    }
    // Actualizaremos el width al montar el componente
    updateWidth()
    // Nos suscribimos al evento resize() de window
    window.addEventListener("resize", updateWidth)
  }, []);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 shadow-md z-10">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link to='/'>
          <img src={ logo } alt="Fast Delivery logo" className="w-10"/>
        </Link>
      </div>
      <div className="block lg:hidden" onClick={ handleClick }>
        <button className="flex items-center px-3 py-2 border rounded text-blue-800 border-blue-800 hover:text-black hover:border-black">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div ref={ menuItems } className={ active ? "w-full flex-grow lg:flex lg:items-center lg:w-auto max-h-auto transition-all duration-700" : "w-full flex-grow lg:flex lg:items-center lg:w-auto max-h-0 overflow-hidden transition-all duration-700"}>
        <div className="text-sm lg:flex-grow">
          {
            options.map(option => {
              if (option.id !== 3) {
                return <Link to={ option.path } className="block mt-4 lg:inline-block lg:mt-0 text-blue-900 hover:text-black mr-4 hover:underline" key={ option.id }>
                        { option.title }
                      </Link>
              }
            })
          }
        </div>
        <div>
          {
              options.map(option => {
                if (option.id === 3) {
                  return <Link to={ option.path } className="btn-outline btn-outline-blue mt-4 lg:mt-0 leading-none inline-block" key={ option.id }>
                    { option.title }
                  </Link>
                }
              })
            }
        </div>
      </div>
    </nav>
  )
}



export default Nav;