import Card from "react-bootstrap/Card";
import { Component } from "react";
import { BsBookmarkFill } from "react-icons/bs";

class SingleBook extends Component {
  state = {
    hovered: false,
  };

  handleEnter = () => {
    this.setState({ hovered: true });
  };

  handleLeave = () => {
    this.setState({ hovered: false });
  };

  render() {
    return (
      <Card
        className="bookCard"
        onMouseEnter={() => this.handleEnter()}
        onMouseLeave={() => this.handleLeave()}
      >
        <div className={`${this.state.hovered ? "" : "hidden"}`}>
          <div className="readMore">
            <BsBookmarkFill />
          </div>
        </div>

        <Card.Img className="bookImg" variant="top" src={this.props.book.img} />
        <Card.Body className="bookText">
          <Card.Title className="bookTitle">{this.props.book.title}</Card.Title>
          <Card.Text>{this.props.book.category}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
