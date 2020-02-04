import React from "react";

import logo from "../img/logo.png"

function Home() {
  return(
    <div className="">
      <img
        src="https://images.unsplash.com/photo-1551825687-f9de1603ed8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt="Julian Peña"
      />
      <figure className="my-10 mx-20">
        <img
          src={ logo }
          alt="Fast Delivery logo"
        />
      </figure>
      <h2 className="text-gray-800 font-sans text-lg text-center">¿Quieres comprar en Estados Unidos?</h2>
    </div>
  )
}

export default Home;