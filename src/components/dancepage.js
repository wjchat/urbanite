import React from 'react'

import Pic1 from '../components/dancers_1'
import Pic2 from '../components/dancers_2'
import Parallax from '../components/parallax'
import styles from '../sass/dancer.module.sass'
import styles2 from '../sass/index.module.sass'
import TechSchedule from '../components/techschedule'

const Drink = (props) => (
    <div className = {styles.drink}>
        <h2>{props.name}</h2>
        <p>{props.recipie}</p>
    </div>
)
const Place = (props) => (
    <li>
        <h2>{props.name}</h2>
        <div>
            <h4>{props.address}</h4>
            <p>{props.description}</p>
        </div>
    </li>
)
const PlaceList = () => (
    <ul className = {styles.places}>
        <Place 
        name = 'Holiday Inn'
        address = '654 E Morris Ave, Urbana-Champaign, IL'
        description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores impedit fugiat in quasi porro minus laborum harum voluptas, animi, fuga quidem consequatur quod debitis minima culpa incidunt delectus dolor nostrum.' /> 
        <Place 
        name = 'Canopy Club'
        address = '654 E Morris Ave, Urbana-Champaign, IL'
        description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores impedit fugiat in quasi porro minus laborum harum voluptas, animi, fuga quidem consequatur quod debitis minima culpa incidunt delectus dolor nostrum.' /> 
        
        
    </ul>
)
const TechList = (props) => (
    <li className = {styles.techlist}>
        <h2>{props.title}</h2>
        <h4>{props.description}</h4>
        <p>{props.time}</p>
    </li>
)

const Times = () => (
    <div className = {styles.times}>
        <div>
            <h1><orange>TECH</orange></h1>
            <TechSchedule />
        </div>
        <div>
            <ul>
                <TechList
                 title = 'Dress Rehearsal'
                 description = 'Be at The Canopy Club to prepare for the show'
                 time = '2:00 pm'                 
                  />
                <TechList
                 title = 'Dancer Call Time'
                 description = 'Be back at The Canopy Club before doors open.'
                 time = '8:00 pm'                 
                  />
                  <TechList
                 title = 'Showtime'
                 description = 'The show begins!'
                 time = '10:00 pm'                 
                  />
            </ul>
                
        </div>
    </div>
)
export default class DancePage extends React.Component{
    render(){
        return(
            <div className = {styles.fullpage}>
                <h1>WELCOME TO <br/>
                <orange>URBANITE XXI</orange></h1>
                <Parallax 
                className = {styles.pic1}
                image = <Pic1 /> 
                />
                <p className = {styles.plaintext}>This page has all the info dancers need for a successful weekend. On this page you can find information regarding the hotel/venue, parking, and scheduling. There are also details regarding the dancer pre-party and the drink specials for the weekend.</p>
                <h2>Send registration information <br/> to <orange>Doug@Doug.com</orange></h2>
                <h2 className = {styles.placeHeader}>Places</h2>
                <div className = {styles2.lineOne}></div>
                <PlaceList />
                <h2>Times</h2>
                <div className = {styles2.lineOne}></div>
                <Times />
                <h2 className = {styles.extrasHeader}>Extras</h2>
            <div className = {styles2.lineOne}></div>
            <br/>
            <Parallax 
                className = {styles.pic2}
                image = <Pic2 /> 
                />
            <h1>DANCER <orange>PRE - PARTY</orange></h1>
            <p className = {styles.plaintext}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sint doloribus autem enim tempora quod at quis reprehenderit rem, commodi molestiae sed. Optio repellendus eius illum minus maxime rerum ullam!
            </p>
            <br/>
            <Drink
            name = 'Tuxedo Swirl'
            recipie = "Gin + Red Bull + Bailey's" />
            <Drink
            name = 'Tuxedo Swirl'
            recipie = "Gin + Red Bull + Bailey's" />
            <Drink
            name = 'Tuxedo Swirl'
            recipie = "Gin + Red Bull + Bailey's" />
            
            </div>
        )
    }
}