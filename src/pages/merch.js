import React from 'react'

import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout'
import Shirt1 from '../images/shirt1.jpeg'
import Shirt2 from '../images/shirt2.jpeg'
import styles from '../sass/merch.module.sass'

class Item extends React.Component{
    render(){
        return(
            <OutboundLink className = {styles.item}
               href = {this.props.url}
               target= '__blank'
               ref = 'animate'>
                <h3>{this.props.name}</h3>
                <img src={this.props.img} alt={this.props.name}/>  
                <h5>${this.props.price}</h5>
            </OutboundLink>
        )
    }
}
const ItemList = () =>(
    <ul className = {styles.itemlist}>
        <Item 
        url = 'https://squareup.com/store/urbanite/item/xxi-chi-black-tee'
        name = 'XXI CHI BLACK T' 
        img = {Shirt1}
        price = '25.00'  />        
        <Item 
        url = 'https://squareup.com/store/urbanite/item/xxi-chi-white-tee' 
        name = 'XXI CHI WHITE T'
        img = {Shirt2}
        price = '25.00'  />
    </ul>
)
const Merch = () => (
  <Layout>
   <div className = {styles.header}>
    <h1>MERCHANDISE</h1>
   </div>
    <ItemList />
  </Layout>
)

export default Merch
