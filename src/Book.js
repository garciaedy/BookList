import React, { Component } from 'react'

export default class componentName extends Component {
constructor(props){
  super(props)
  state={
    count:1
  }
  this.handleClick = this.handleClick.bind(this);
}


    handleClick (){
        console.log('you click me')
        console.log(this.state.count)
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
