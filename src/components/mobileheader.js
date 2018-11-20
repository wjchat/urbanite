import React from 'react'
import { Link } from 'gatsby'

import closeNav from '../images/closenav.svg'
import openNav from '../images/openNav.svg'
import styles from '../sass/mobilenav.module.sass'

const NavOption = (props) => (
        <li style = {{
        listStyle: 'none',
        }}>
            <Link activeClassName = {styles.activeLinkMobile}
                className = {styles.linkMobile}
                to = {props.link}>{props.page}</Link>
        </li>
)

const ClosedNav = (props) =>(
    <div className = {styles.switchContainer}>
        <img onClick = {props.onClick} src= {openNav} alt=""/>
    </div>
)
const OpenedNav = (props) =>(
    <div className = {styles.sideBar}>
        <div className = {styles.closeNav}>
            <img onClick = {props.onClick} src= {closeNav} alt=""/>
        </div>
       <ul>
           <NavOption
            link = '/'
            page = 'Home' /> 
            <NavOption
            link = '/tickets'
            page = 'Tickets' /> 
            <NavOption
            link = '/merch'
            page = 'Merch' /> 
            <NavOption
            link = '/dancers'
            page = 'For Dancers' /> 
       </ul>
    </div>
)
export default class MobileHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
        }
    }
    toggleNav = () =>{
        this.setState({
            open: !this.state.open,
        })
    }
    render(){
        return(
            <div className = {styles.navMobile}>
               {this.state.open ? 
                    <OpenedNav onClick = {this.toggleNav} />
                    : <ClosedNav onClick = {this.toggleNav} />} 
            </div>
        )
    }
}