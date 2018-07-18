import React, { Component } from 'react';


export default class Photo extends Component{
    render(){
        var divStyle = {
            backgroundImage: 'url(' + 'images/profile.jpg' + ')',
            WebkitTransition: 'all', // note the capital 'W' here
            msTransition: 'all', // 'ms' is the only lowercase vendor prefix
        };
        return(
            <div className="p_photo" style={divStyle}><img src="" alt=""/></div>
        )
    }
}