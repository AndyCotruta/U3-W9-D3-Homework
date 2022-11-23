import SingleBook from "./SingleBookComponent";
import fantasy from "../data/books/fantasy.json";
import { Component } from "react";

class BookList extends Component {
  state = {
    searchedQuery: "",
    filteredArray: fantasy,
  };

  handleOnChange = (e) => {
    console.log(e.target.value);
    this.setState({ searchedQuery: e.target.value });
    this.setState({
      filteredArray: fantasy.filter((book) => {
        if (this.state.searchedQuery === "") {
          return book;
        } else {
          return book.title
            .toLowerCase()
            .includes(this.state.searchedQuery.toLowerCase());
        }
      }),
    });
  };
  render() {
    return (
      <>
        <h2 className="mx-4">BookList</h2>
        <div>
          <input
            className="mx-4 my-2"
            type="text"
            placeholder="Search books here"
            onChange={(e) => this.handleOnChange(e)}
          ></input>
        </div>
        <div className="flex-group mx-4">
          {this.state.filteredArray.map((book) => (
            <SingleBook book={book} key={book.asin} />
          ))}
        </div>
      </>
    );
  }
}

export default BookList;
