import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentsList extends Component {
  render() {
    return (
      <>
        <h6 className="mt-2">Comments List</h6>
        {this.props.comments.slice(0, 3).map((comment) => (
          <ListGroup className="my-1" key={comment._id}>
            <ListGroup.Item className="commentListItem">
              {comment.rate} | {comment.comment}
            </ListGroup.Item>
          </ListGroup>
        ))}
      </>
    );
  }
}

export default CommentsList;
