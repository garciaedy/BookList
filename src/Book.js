import React, { Component } from 'react'

export default class componentName extends Component {
    handleClick (){
        console.log('ypu click me')
    }
    
    render() {
        // console.log(this.props)
        const {image,title, author} = this.props.info;
        return (
            <article className="book">
            <img src={image} width="150" alt="book"/>
               
            <div>
            <h3>Title: {title}</h3> 
            <h5>Author: {author}</h5>
            <button type="button" onClick={this.handleClick} >Add Count</button>
            </div>

            </article>
        )
    }
}
