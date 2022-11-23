import Badge from "react-bootstrap/Badge";

const MyBadge = (props) => {
  return (
    <Badge className="mx-4 my-3" pill variant={props.color}>
      {props.text}
    </Badge>
  );
};

export default MyBadge;
