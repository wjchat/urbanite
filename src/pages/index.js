import React from 'react'
import { Link } from 'gatsby'

import LandingImage from '../components/urblanding'
import LandingTwo from '../components/landingtwo'
import LandingThree from '../components/landingthree'
import Layout from '../components/layout'
import Logos from '../components/logos'
import ParallaxBox from '../components/parallax'
import Performers from '../components/performers'
import styles from '../sass/index.module.sass'
import Tickets from '../components/ticketsimage'
import {TweenMax} from 'gsap'

let duration = .15;
class TicketsView extends React.Component{
    componentDidMount(){
        window.scrollTo(0,0);
        this.rect = this.refs.animate.getBoundingClientRect();
        this.duration = '.8';
    }
    grow = () =>{
        TweenMax.to(this.refs.animate, duration, {
            scale: 1.1,
            ease: 'linear',
        })
    }
    shrink = () =>{
        TweenMax.to(this.refs.animate, duration,{
                scale: 1,
                ease: 'linear'
        })
    }
    move = (e) =>{ 
        console.log(e.pageY - this.rect.top)
        TweenMax.to(this.refs.animate, this.duration,{
            x: ((e.pageX - this.rect.left) - (this.refs.animate.clientWidth / 2)) / 10,
            y: ((e.pageY - this.rect.top) - (this.refs.animate.clientHeight)) / 10,
            ease: 'ease-in-out',
        })
    }
    render(){
        return(
            <div ref = 'base' onMouseMove = {this.move}>
                <LandingThree />
                <div ref = 'animate' className = {styles.tickets}
                        onMouseOver = {this.grow}
                        onMouseLeave = {this.shrink}
                        >
                    <Link
                       to = '/tickets'>
                        <Tickets />
                    </Link>
                </div>
                <div className = {styles.lineThree}></div>
            </div>
        )
    }
}
    
class IndexPage extends React.Component{
    render(){
            return(
        <div>
        <Layout>
            <div className = {styles.landing}>
            <LandingImage/>
            </div>
            <div className = {styles.logos}>
               <Logos />
            </div>
           <ParallaxBox 
              className = {styles.imageTwo}
              image = <LandingTwo />
               />                
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
            <ParallaxBox
                className = {styles.imageThree}
                image = <TicketsView />
                />
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
    }
}

export default IndexPage
