import React from 'react' /* JSX is converted into React code. */
import { render } from 'react-dom'
import App from './App.jsx'

document.addEventListener('DOMContentLoaded', function(){
  document.addEventListener('deviceready', function(){
    render(
      <App />,
      document.getElementById('root')
    )
  })
})
