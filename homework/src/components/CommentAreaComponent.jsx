import { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import AddComment from "./AddCommentComponent";
import CommentsList from "./CommentsListComponent";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.elementId}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjE3NGQ0YmUzZDAwMTU4NDVmZDgiLCJpYXQiOjE2NjkyOTM4MjQsImV4cCI6MTY3MDUwMzQyNH0.krsGgTWHFNAtchIBi9nUyCVJeKaYcEdqIWqpO4JUhSk",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({ comments: data, isLoading: false });
        console.log(data);
      } else {
        this.setState({ isLoading: false, isError: true });
        console.log("Error fetching the comments for this book");
      }
    } catch (error) {
      this.setState({ isLoading: false, isError: true });
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <div className="d-column">
        {this.state.isLoading && (
          <Spinner
            animation="border"
            role="status"
            className="custom-spinner-color"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        {this.state.isError && (
          <Alert variant="danger">
            Ouch, something went wrong while loading comments :(
          </Alert>
        )}
        <CommentsList
          comments={this.state.comments}
          reloadComments={this.fetchComments}
        />
        <AddComment
          elementId={this.props.elementId}
          reloadComments={this.fetchComments}
        />
      </div>
    );
  }
}

export default CommentArea;
