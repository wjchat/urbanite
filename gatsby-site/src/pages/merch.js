import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Shirt1 from '../images/shirt1.jpeg'
import Shirt2 from '../images/shirt2.jpeg'

const Item = (props) => (
    <li style = {{
        width: '40%',
        textAlign: 'center',
        listStyle: 'none',
        }}>
        <h3>{props.name}</h3>
        <img src={props.img} alt={props.name}/>
        <h5>${props.price}</h5>
    </li>
)
const ItemList = () =>(
    <ul
       style = {{
            width: '95%',
            display: 'flex',
            boxSizing: 'border-box',
            justifyContent: 'space-around',
            }}
            >
        <Item 
        name = 'XXI CHI BLACK T' 
        img = {Shirt1}
        price = '25.00'  />        
        <Item 
        name = 'XXI CHI WHITE T' 
        img = {Shirt2}
        price = '25.00'  />
    </ul>
)
const Merch = () => (
  <Layout>
    <h1>Merchandise</h1>
    <p>We got swag bruh.</p>
    <ItemList />
  </Layout>
)

export default Merch
