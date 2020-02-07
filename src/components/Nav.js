import React from 'react';

import {
  Link
} from 'react-router-dom';

import Button from './Button';

import options from '../data/options';

function Nav() {
  return (
    <nav style={{ height: '16vh' }}>
      <ul className="flex justify-around items-center flex-wrap m-4 h-full sm:mx-16">
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