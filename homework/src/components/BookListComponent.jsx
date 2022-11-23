import SingleBook from "./SingleBookComponent";
import fantasy from "../data/books/fantasy.json";

const BookList = (props) => {
  return (
    <>
      <h2>BookList</h2>
      <div className="flex-group">
        {fantasy.map((book) => (
          <SingleBook book={book} />
        ))}
      </div>
    </>
  );
};

export default BookList;
