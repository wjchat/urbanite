import React from 'react'
import styles from '../sass/footer.module.sass'
export default class Footer extends React.Component{
    render(){
        return(
        <footer className = {styles.footer}>
           <p>ROXWELL&copy;2018</p>
            <p>SITE BY PRETTYBOY CREATIVE</p>    
        </footer>
        )
    }
}