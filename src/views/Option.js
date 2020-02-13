import React from 'react';

// import { Player } from 'video-react';
import ReactPlayer from 'react-player'

function Option({ title, description, videoUrl }) {
  const opts = {
    height: '220px',
    width: '100%'
  };

  return (
    <div className="md:flex relative">
      <div className="md:w-1/2 flex m-auto circle h-80vh">
        <div className="lg:mx-16 md:mx-4 sm:my-4 md:my-auto w-full">
          <ReactPlayer
            url={ videoUrl }
            width='100%'
            className="ReactPlayer"
          />
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col justify-center px-4 lg:px-8">
        <h1 className="text-gray-700 font-sans font-semibold text-center text-4xl mb-5">{ title }</h1>
        <p>{ description }</p>
      </div>
    </div>
  )
}

export default Option;