import React from 'react'

import DancePage from '../components/dancepage'
import DanceIntro from '../components/danceintro'
import Layout from '../components/layout'
import styles from '../sass/dancer.module.sass'



const ErrorMSG = () =>(
    <p className = {styles.error}>
        Wrong password, homie.
    </p>
)
class PreEnter extends React.Component{
    handleClick = () => {
        this.props.onClick(this.refs.password.value.toLowerCase());
    }
    render(){
        return(
            <div className = {styles.preenter}>
               <DanceIntro />
               <div className = {styles.inputContainer}>
                <input placeholder = 'ENTER PASSWORD' ref = 'password' type="text"/>
                <br/>
                <div className = {styles.submit} onClick = {this.handleClick} type = 'default'>SUBMIT</div>
                {this.props.pw && <ErrorMSG />}
                </div>
            </div>
        )
    }
}
const PreEnterContainer= (props) =>(
    <div className = {styles.entercontainer}>
        <PreEnter
         pw = {props.pw}
         onClick = {props.onClick} />
    </div>
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
            window.scrollTo(0, 0);
        }else{
            this.setState({
                wrongPW: true,
            })
        }
    }
    render(){
        return(
        <div>
            {!this.state.entered ? <PreEnterContainer 
                            pw = {this.state.wrongPW}
                          onClick = {this.handleClick} />:<DancePage /> }
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
