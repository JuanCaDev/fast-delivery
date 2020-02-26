import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// import options from './data/options';

import Home from './views/Home';
import Option from './views/Option';
// import Button from './components/Button';

function Routes() {
  return (
    <Switch>
      <Route path="/compras-o-vendes">
        <Option title="Sé original" videoUrl="https://vimeo.com/391359249">
          <p>
            Ahora todo es más fácil, ahora no hay fronteras para el que compra y para 
            el que vende. Le enseñamos a comprar inteligente (lo que es y al precio que es) y si lo 
            suyo es el comercio le enseñamos a negociar, a buscar, a comprar al por mayor y al mejor precio.
          </p>
        </Option>
      </Route>
      <Route path="/que-hacemos">
        <Option title="Conoce más de Fast Delivery" videoUrl="https://vimeo.com/391359649">
          <p>
            Una empresa de carga, pero con servicios del alma. Lo original, 
            lo real, lo del primer mundo, lo que está de moda, lo que no ha llegado al país todavía y 
            adicional a todo esto te tira la liga... todo eso en una sola empresa: Fast Delivery.
          </p>
        </Option>
      </Route>
      <Route path="/codigo-fast">
        <Option title="Sé lider" videoUrl="https://vimeo.com/391359719">
          <p>
            Crea y refuerza tu empresa. Lealtad, transparencia y originalidad. También brindamos
            todas las facilidades para que te ganes la liga de manera informal, formal o creando tu propia empresa.
            Con los últimos 4 digitos de tu cédula puedes ganarte un porcentaje solo por recomendar la empresa.
            Cuando compren con tu código, vas a ganas comisiones.
          </p>
          <a href="https://goo.gl/forms/32OK3olRonII5Ikk2" className="btn-outline btn-outline-red mt-5 mx-auto" target="_blank" rel="noopener noreferrer">
            Obtener mi código Fast
          </a>
        </Option>
      </Route>
      {/* {
        options.map(option => {
          return  <Route path={ option.path } key={ option.id }>
                    <Option title={ option.subtitle } description={ option.description } videoUrl={ option.videoUrl }/>
                  </Route>
        })
      } */}
      <Router path="/">
        <Home/>
      </Router>
    </Switch>
  )
}

export default Routes;