import React from 'react'
import { Link } from 'gatsby'

import DancePage from '../components/dancepage'
import DanceIntro from '../components/danceintro'
import Layout from '../components/layout'
import Shirt1 from '../images/shirt1.jpeg'
import Shirt2 from '../images/shirt2.jpeg'
import styles from '../sass/dancer.module.sass'



class PreEnter extends React.Component{
    handleClick = () => {
        this.props.onClick(this.refs.password.value.toLowerCase());
    }
    render(){
        return(
            <div className = {styles.preenter}>
               <DanceIntro />
               <div>
                <input placeholder = 'ENTER PASSWORD' ref = 'password' type="text"/>
                <br/>
                <div onClick = {this.handleClick} type = 'default'>SUBMIT</div>
                </div>
            </div>
        )
    }
}
const ErrorMSG = () =>(
    <p>
        Wrong password :/
    </p>
)
class DancePortal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            entered: true,
            wrongPW: false,
        }
    }
    handleClick = (password) =>{
        if(password === 'password'){
            this.setState({
                entered: true,
                wrongPW: false,
            });
        }else{
            this.setState({
                wrongPW: true,
            })
        }
    }
    render(){
        return(
        <div>
            {!this.state.entered ? <PreEnter onClick = {this.handleClick} />:<DancePage /> }
            {this.state.wrongPW && <ErrorMSG /> }
        </div>
        )
    }
}
const Dancers = () => (
  <Layout>
    <DancePortal />
  </Layout>
)

export default Dancers
