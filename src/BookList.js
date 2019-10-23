import React, { Component } from 'react'
import Book from "./Book"
import BookData from './BookData'

export default class componentName extends Component {
state = {
    books: BookData
};
//this.setState({})
    render() {
        //filter
        // forEach
        //map
        //reduce
    // const books = this.state.books.map((item)=> item.book);
    // console.log(books); for reference

        return (
        <section>
        <h3>This is our BookList</h3>
        {this.state.books.map((item) => (
        <Book key ={item.id} info={item}/>
        ))};

        </section>
        )
    }
}
