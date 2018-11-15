import React from 'react'
import { Link } from 'gatsby'

import LandingImage from '../components/urblanding'
import LandingTwo from '../components/landingtwo'
import LandingThree from '../components/landingthree'
import Layout from '../components/layout'
import Logos from '../components/logos'
import Performers from '../components/performers'
import styles from '../sass/index.module.sass'
import Tickets from '../components/ticketsimage'

const IndexPage = () => (
    <div>
    <Layout>
        <div className = {styles.landing}>
        <LandingImage/>
        </div>
       <Logos />
       <div className = {styles.imageTwo}>
            <LandingTwo />
        </div>
        <h1 style = {{
                  position: 'relative'
              }}>The dopest 
               <br/>
               <orange>dance showcase</orange>
                <br/>in the midwest.</h1>
        <div className = {styles.lineOne}></div>
        <p className = {styles.textOne}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae voluptas reprehenderit ullam illum excepturi sapiente quia maxime odio vel, nam sequi aliquid, ad deleniti, quisquam non saepe rem consequuntur enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum perferendis pariatur deserunt possimus, blanditiis? Ipsam, alias dolore repudiandae necessitatibus cum omnis ipsa dolorum, tempore minima asperiores iusto. Quas neque, quae.</p>
        <div className = {styles.lineTwo}>
            <h1>Don't miss the <br/>
            show of a lifetime.</h1>
        </div>
        <h1 className = {styles.location}><orange>URBANA - CHAMPAIGN, IL <br/>
        THE CANOPY CLUB <br/>
        JANUARY 1ST, 2018 </orange></h1>
        <div className = {styles.imageThree}>
            <LandingThree />
            <div className = {styles.tickets}>
                <Tickets />
            </div>
            <div className = {styles.lineThree}></div>
        </div>
        <h1 
        className = {styles.performHeader}
        >PERFORMANCES BY</h1>
        <div className = {styles.performers}>
            <Performers />
        </div>
        <h1 className = {styles.featuring}>FEATURING <br/>
        <orange>DJ METRO</orange></h1>
      </Layout>
    </div>
)

export default IndexPage
