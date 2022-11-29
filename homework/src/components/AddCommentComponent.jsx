import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

const AddComment = (props) => {
  // state = {
  //   addComment: { comment: "", rate: "1", elementId: "" },
  // };

  const [addComment, setAddComment] = useState({ comment: "", rate: "1" });

  const onChangeHandler = (value, fieldToSet) => {
    // this.setState({
    //   addComment: {
    //     ...this.state.addComment,
    //     [fieldToSet]: value,
    //   },
    // });

    setAddComment({ ...addComment, [fieldToSet]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          body: JSON.stringify({
            ...addComment,
            elementId: props.elementId,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjE3NGQ0YmUzZDAwMTU4NDVmZDgiLCJpYXQiOjE2NjkyOTM4MjQsImV4cCI6MTY3MDUwMzQyNH0.krsGgTWHFNAtchIBi9nUyCVJeKaYcEdqIWqpO4JUhSk",
          },
        }
      );
      if (response.ok) {
        alert("Comment posted successfully");
        props.reloadComments();
        setAddComment({ comment: "", rate: "" });
      } else {
        console.log("something went wrong!");
        setAddComment({ comment: "", rate: "" });
      }
    } catch (error) {
      setAddComment({ comment: "", rate: "" });
    }
  };

  return (
    <>
      <h6>Add a Comment below:</h6>
      {!props.elementId && (
        <Alert variant="danger">Please click on a card to add comments.</Alert>
      )}
      {props.elementId && (
        <>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group>
              <Form.Label>Comment</Form.Label>
              <Form.Control
                className="commentListItem"
                as="textarea"
                rows={3}
                value={addComment.comment}
                required
                onChange={(e) => onChangeHandler(e.target.value, "comment")}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Rate</Form.Label>
              <Form.Control
                className="commentListItem"
                as="select"
                value={addComment.rate}
                required
                onChange={(e) => onChangeHandler(e.target.value, "rate")}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>

            <Button className="submitButton" type="submit">
              Submit Comment
            </Button>
          </Form>
        </>
      )}
    </>
  );
};

export default AddComment;
