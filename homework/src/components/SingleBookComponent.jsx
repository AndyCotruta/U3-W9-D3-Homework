import Card from "react-bootstrap/Card";
import { Component } from "react";
import { BsBookmarkFill } from "react-icons/bs";
import CommentArea from "./CommentAreaComponent";

class SingleBook extends Component {
  state = {
    hovered: false,
    clicked: false,
  };

  handleEnter = () => {
    this.setState({ hovered: true });
  };

  handleLeave = () => {
    this.setState({ hovered: false });
  };

  handleClick = () => {
    if (this.state.clicked === false) {
      this.setState({ clicked: true });
    } else {
      this.setState({ clicked: false });
    }
  };

  render() {
    return (
      <div className="CardAndComments">
        <Card
          className="bookCard"
          onMouseEnter={() => this.handleEnter()}
          onMouseLeave={() => this.handleLeave()}
          onClick={() => this.handleClick()}
        >
          <div className={`${this.state.hovered ? "" : "hidden"}`}>
            <div className="readMore">
              <BsBookmarkFill />
            </div>
          </div>

          <Card.Img
            id={`${this.state.clicked ? "selectedBook" : ""}`}
            className="bookImg"
            variant="top"
            src={this.props.book.img}
          />
          <Card.Body className="bookText">
            <Card.Title className="bookTitle">
              {this.props.book.title}
            </Card.Title>
            <Card.Text>{this.props.book.category}</Card.Text>
          </Card.Body>
        </Card>
        {this.state.clicked && <CommentArea elementId={this.props.book.asin} />}
      </div>
    );
  }
}

export default SingleBook;
