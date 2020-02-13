import React from 'react';

import {
  Link
} from 'react-router-dom';

import Button from './Button';

import options from '../data/options';

function Nav() {
  return (
    <nav className="bg-white">
      <ul className="flex justify-around items-center flex-wrap p-4 h-full sm:mx-16">
        <Button>
          <Link to="/">Inicio</Link>
        </Button>
        {
          options.map(option => {
            return <li key={ option.id }> 
                     <Button>
                       <Link to={ option.path }>{ option.title }</Link>
                     </Button>
                   </li>
          })
        }
      </ul>
    </nav>
  )
}



export default Nav;