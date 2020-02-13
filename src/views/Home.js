import React from "react";

import image from '../assets/images/image.jpg';
import logo from "../assets/images/logo.png";

function Home() {
  return(
    <div className="Home-container-screen h-auto">
      <div className="w-full pr-0 lg:pr-32">
        <img
          src={ image }
          alt="Julian Peña"
        />
      </div>

      <div className="w-full flex flex-col items-center px-4 my-auto sm:px-10 md:px-16 lg:px-40">
        <figure className="w-full px-1">
          <img
            src={ logo }
            alt="Fast Delivery logo"
            className="w-48 md:w-full mx-auto"
          />
        </figure>
        <h1 className="title w-full px-1">¿Quieres comprar en Estados Unidos?</h1>
      </div>
    </div>
  )
}

export default Home;