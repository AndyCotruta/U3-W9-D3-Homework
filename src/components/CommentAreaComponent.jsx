import { useState, useCallback } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import AddComment from "./AddCommentComponent";
import CommentsList from "./CommentsListComponent";
import { useEffect } from "react";

const CommentArea = (props) => {
  // state = {
  //   comments: [],
  //   isLoading: false,
  //   isError: false,
  // };

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${props.elementId}`,
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
        // this.setState({
        //   comments: data,
        //   isLoading: false,
        // });
        setComments(data);
        setIsLoading(false);
        console.log(data);
      } else {
        // this.setState({ isLoading: false, isError: true });
        setIsLoading(false);
        setIsError(true);
        console.log("Error fetching the comments for this book");
      }
    } catch (error) {
      // this.setState({ isLoading: false, isError: true });
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.elementId !== this.props.elementId) {
  //     this.setState({ isLoading: true });
  //     this.setState({ comments: [] });
  //     this.fetchComments();
  //   }
  // }

  useEffect(() => {
    setIsLoading(true);
    setComments([]);
    fetchComments();
  }, [props.elementId]);

  return (
    <div className="d-column">
      {props.elementTitle && (
        <div className="commentsTitle">{props.elementTitle}</div>
      )}
      {isLoading && (
        <div className="isLoadingText d-flex align-items-center mb-2">
          <div className=" mr-2">Content is loading...</div>
          <Spinner animation="border" role="status" className="spinner">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
      {isError && (
        <Alert variant="danger">
          Ouch, something went wrong while loading comments :(
        </Alert>
      )}

      {!props.elementId && (
        <>
          {" "}
          <h6 className="mt-2">Comments List</h6>
          <Alert variant="danger">
            Please click on a card to load comments.
          </Alert>
        </>
      )}

      <CommentsList comments={comments} reloadComments={fetchComments} />
      <AddComment elementId={props.elementId} reloadComments={fetchComments} />
    </div>
  );
};

export default CommentArea;
