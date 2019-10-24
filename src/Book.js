import React, { Component } from 'react'

export default class componentName extends Component {
constructor(props){
  super(props)
  this.state={
    count:1,
    name: 'Edy'
  }
};



   addCount = () =>{
this.setState({count: this.state.count + 1})
   };
  lowerCount = () => {
    this.setState({ count: this.state.count - 1 })
  };
  resetCount = () => {

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
            <h2>Count:{this.state.count}</h2>
              <h2>Name:{this.state.name}</h2>
            <button type="button" onClick={this.addCount}>Add Count</button>
            <button type="button" onClick={this.resetCount}>Reset Count</button>
            <button type="button" onClick={this.lowerCount} >Lower Count</button>
            </div>

            </article>
        )
    }
}
