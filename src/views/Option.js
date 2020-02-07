import React from 'react';

import YouTube from 'react-youtube';

function Option({ title, description }) {
  const opts = {
    height: '100%',
    width: '100%'
  };

  return (
    <div className="md:flex relative">
      <div className="md:w-1/2 flex m-auto circle h-80vh">
        <div className="mx-4 my-8 lg:mx-16 md:my-32 w-full">
          <YouTube
            videoId="Qs_OcQebuPI"
            opts={opts}
            containerClassName="w-full h-64 md:h-full"
          />
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col justify-center px-8 lg:px-16">
        <h1 className="text-gray-700 font-sans font-semibold text-center text-4xl mb-5">{ title }</h1>
        <p>{ description }</p>
      </div>
    </div>
  )
}

export default Option;