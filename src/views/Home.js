import React from "react";

import logo from "../img/logo.png"

function Home() {
  return(
    <div className="md:flex">
      <div className="md:w-1/2" style={{ height: '80vh' }}>
        <img
          src="https://images.unsplash.com/photo-1551825687-f9de1603ed8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="Julian Peña"
        />
      </div>

      <div className="md:w-1/2 flex flex-col justify-around">
        <figure className="my-10 mx-20">
          <img
            src={ logo }
            alt="Fast Delivery logo"
            className="mx-auto"
          />
        </figure>
        <h2 className="text-gray-700 font-sans font-semibold text-center text-4xl">¿Quieres comprar en Estados Unidos?</h2>
      </div>
    </div>
  )
}

export default Home;