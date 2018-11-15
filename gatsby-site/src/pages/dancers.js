import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Shirt1 from '../images/shirt1.jpeg'
import Shirt2 from '../images/shirt2.jpeg'

const PostEnter = () =>(
    <div>
        <p>This will be all of the relevant info for the dancers</p>
    </div>
)

class PreEnter extends React.Component{
    handleClick = () => {
        this.props.onClick(this.refs.password.value.toLowerCase());
    }
    render(){
        return(
            <div>   
                <input placeholder = 'password' ref = 'password' type="text"/>
                <button onClick = {this.handleClick} type = 'default'>Submit</button>
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
            entered: false,
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
            {!this.state.entered ? <PreEnter onClick = {this.handleClick} />:<PostEnter /> }
            {this.state.wrongPW && <ErrorMSG /> }
        </div>
        )
    }
}
const Dancers = () => (
  <Layout>
    <h1>For The Dancers</h1>
    <DancePortal />
  </Layout>
)

export default Dancers
