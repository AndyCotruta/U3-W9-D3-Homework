import { Component } from "react";
import AddComment from "./AddCommentComponent";
import CommentsList from "./CommentsListComponent";

class CommentArea extends Component {
  state = {
    comments: [],
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
        this.setState({ comments: data });
        console.log(data);
      } else {
        console.log("Error fetching the comments for this book");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <div className="d-column">
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
