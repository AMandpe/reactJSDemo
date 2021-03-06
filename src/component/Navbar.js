import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  console.log('Navbar', props)

// withRouter it is a higher order component
  // setTimeout(() => {
  //   props.history.push('/about') // it is called programmatic redirect
  // }, 2000)
  return (
    <nav className='nav wrapper red darken-3'>
      <div className='container'>
        <a className='brand-logo'>Poke Times</a>
        <ul className='right'>
          <li><Link to='/'>Home</Link></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          <li><NavLink to='/useOfAxios'>useOfAxios</NavLink></li>
        </ul>
        { props.location.pathname }
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
