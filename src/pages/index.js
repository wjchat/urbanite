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
        TweenMax.to(this.refs.animate, this.duration,{
            x: ((e.pageX - this.rect.left) - (this.refs.animate.clientWidth / 2)) / 25,
            y: ((e.pageY - this.rect.top) - (this.refs.animate.clientHeight)) / 25,
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
            <h2 style = {{
                      position: 'relative'
                  }}>The dopest 
                   <br/>
                   <orange>dance showcase</orange>
                    <br/>in the midwest.</h2>
            <div className = {styles.lineOne}></div>
            <p className = {styles.textOne}>Urbanite is the meeting ground for the best dance crews in the midwest. It is a platform for dancers who are at the cutting edge of their craft and home to one of the liveliest parties you could hope to find. Expect to see some of the most incredible performances you have ever seen both on and off the stage with a DJ to keep everybody moving after the show. On top of all that, Urbanite offers drink specials to make sure you have everything you need to have the night of your life. Grab a friend, grab a drink, and enjoy some performances that you will never forget.</p>
            <div className = {styles.lineTwo}>
                <h2>Don't miss the <br/>
                show of a lifetime.</h2>
            </div>
            <h1 className = {styles.location}><orange>CHAMPAIGN - URBANA, IL <br/>
            THE CANOPY CLUB <br/>
            DECEMBER 1ST, 2018 </orange></h1>
            <ParallaxBox
                className = {styles.imageThree}
                image = <TicketsView />
                />
            <div className = {styles.lineThree}></div>
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
