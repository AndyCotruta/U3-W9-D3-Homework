import SingleBook from "./SingleBookComponent";
import fantasy from "../data/books/fantasy.json";
import { useState } from "react";
import CommentArea from "./CommentAreaComponent";

const Booklist = () => {
  // state = {
  //   searchedQuery: "",
  //   filteredArray: fantasy,
  //   clickedBook: false,
  //   clickedBookId: undefined,
  //   clickedBookTitle: undefined,
  // };

  const [searchedQuery, setSearchedQuery] = useState("");
  const [filteredArray, setFilteredArray] = useState(fantasy);
  // const [clickedBook, setClickedBook] = useState(false);
  const [clickedBookId, setClickedBookId] = useState(undefined);
  const [clickedBookTitle, setClickedBookTitle] = useState(undefined);

  const handleBookClick = (e, id, title) => {
    // this.setState({ clickedBook: true });
    // this.setState({ clickedBookId: id });
    // this.setState({ clickedBookTitle: title });

    // setClickedBook(true);
    setClickedBookId(id);
    setClickedBookTitle(title);
  };

  const handleOnChange = (e) => {
    // this.setState({ searchedQuery: e.target.value });
    setSearchedQuery(e.target.value);
    // this.setState({
    //   filteredArray: fantasy.filter((book) => {
    //     if (this.state.searchedQuery === "") {
    //       return book;
    //     } else {
    //       return book.title
    //         .toLowerCase()
    //         .includes(this.state.searchedQuery.toLowerCase());
    //     }
    //   }),
    // });
    setFilteredArray(
      fantasy.filter((book) => {
        if (searchedQuery === "") {
          return book;
        } else {
          return book.title.toLowerCase().includes(searchedQuery.toLowerCase());
        }
      })
    );
  };

  return (
    <>
      <h2 className="mx-4">BookList</h2>
      <div>
        <input
          className="mx-4 my-2"
          type="text"
          placeholder="Search books here"
          onChange={(e) => handleOnChange(e)}
        ></input>
      </div>

      <div className="row w-100">
        <div className="col leftRow">
          {filteredArray.map((book) => (
            <SingleBook
              book={book}
              handleBookClick={handleBookClick}
              key={book.asin}
            />
          ))}
        </div>{" "}
        <div className="rightRow">
          <CommentArea
            elementId={clickedBookId}
            elementTitle={clickedBookTitle}
          />
        </div>
      </div>
    </>
  );
};

export default Booklist;
