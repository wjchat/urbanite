import React from 'react'

import { Link } from 'gatsby'
import styles from "../sass/nav.module.sass"

class NavLink extends React.Component {
    handleOver = () =>{
        this.refs.animate.classList.add(styles.active); 
    }
    handleLeave = () =>{
        this.refs.animate.classList.remove(styles.active);
    }
    render(){
        return(
        <li onMouseOver = {this.handleOver} onMouseLeave = {this.handleLeave} style = {{
        listStyle: 'none',
        }}>
        <Link activeClassName = {styles.currentPage}
                   className = {styles.link}
            to = {this.props.link}>{this.props.page}</Link>
            <div ref = 'animate' className = {styles.border}></div>
        </li>
        )
    }
}
class Nav extends React.Component{
    render(){
        return(
            <nav className={styles.nav}
               >
                <NavLink 
                    link = '/'
                    page = 'Home' />     
                <NavLink
                    link = '/ticket'
                    page = 'Tickets' />   
                <NavLink 
                    link = '/merch/'
                    page = 'Merch' />        
                <NavLink 
                    link = '/dancers/'
                    page = 'Dancer Portal' />
            </nav>
        )
    }
}

const Header = ({ siteTitle }) => (
  <div className = {styles.header}
  >
    <div
    >
      <h2>
        <Link className = {styles.title}
          to="/"
        >
          {siteTitle}
        </Link>
      </h2>
      <Nav />
    </div>
  </div>
)

export default Header
