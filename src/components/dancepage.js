import React from 'react'

import styles from '../sass/dancer.module.sass'
import styles2 from '../sass/index.module.sass'
import TechSchedule from '../components/techschedule'

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

const Times = () => (
    <div className = {styles.times}>
        <div>
            <h1><orange>TECH</orange></h1>
            <TechSchedule />
        </div>
        <div></div>
    </div>
)
export default class DancePage extends React.Component{
    render(){
        return(
            <div>
                <h1>WELCOME TO <br/>
                <orange>URBANITE XXI</orange></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae soluta ullam ut, praesentium earum odit quasi rerum eveniet nulla voluptas, iure, delectus assumenda accusamus voluptate vero eum asperiores velit possimus.</p>
                <p>Send registration information to Doug@Doug.com</p>
                
                <h2>Places</h2>
                <div className = {styles2.lineOne}></div>
                <PlaceList />
                <h2>Times</h2>
                <div className = {styles2.lineOne}></div>
                <Times />
            </div>
        )
    }
}