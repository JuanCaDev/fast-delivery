import React from "react";

import image from '../assets/images/image.jpg';
import logo from "../assets/images/logo.png";

function Home() {
  return(
    <div className="md:flex" style={{ height: '80vh' }}>
      <div className="md:w-1/2">
        <img
          src={ image }
          alt="Julian Peña"
        />
      </div>

      <div className="md:w-1/2 flex flex-col justify-center mx-10 md:mx-48">
        <figure>
          <img
            src={ logo }
            alt="Fast Delivery logo"
            className="mx-auto"
          />
        </figure>
        <h1 className="title">¿Quieres comprar en Estados Unidos?</h1>
      </div>
    </div>
  )
}

export default Home;