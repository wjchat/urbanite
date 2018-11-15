import React from 'react'
import styles from '../sass/footer.module.sass'
export default class Footer extends React.Component{
    render(){
        return(
        <footer className = {styles.footer}>
            URBANITE&copy;2018
        </footer>
        )
    }
}