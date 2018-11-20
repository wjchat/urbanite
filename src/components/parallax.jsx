import React from 'react'

import { Parallax } from 'react-scroll-parallax';


class ParallaxBox extends React.Component{
    render(){
        return(
        <Parallax
            className={this.props.className}
            offsetYMax={30}
            offsetYMin={0}
            
            tag="figure"
        >
            {this.props.image}
        </Parallax>
        )
    }
}

export default ParallaxBox;