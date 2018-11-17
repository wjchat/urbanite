import React from 'react'
import { Link } from 'gatsby'
import styles from "../sass/nav.module.sass"

const NavLink = (props)=>(
    <li style = {{
        listStyle: 'none',
        }}>
        <Link
        style = {{
                color: 'white',
                textDecoration: 'none',
                fontFamily: 'sans-serif',
            }} 
        to = {props.link}>{props.page}</Link>
    </li>
)
const Nav = ()=> (
    <ul className={styles.nav}
       >
        <NavLink 
            link = '/'
            page = 'Home' />     
        <NavLink
            link = '/'
            page = 'Tickets' />   
        <NavLink 
            link = '/merch/'
            page = 'Merch' />        
        <NavLink 
            link = '/dancers/'
            page = 'Dancer Portal' />
    </ul>
)
const Header = ({ siteTitle }) => (
  <div className = {styles.header}
  >
    <div
    >
      <h1>
        <Link className = {styles.title}
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
      <Nav />
    </div>
  </div>
)

export default Header
