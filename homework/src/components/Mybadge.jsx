import Badge from "react-bootstrap/Badge";

const MyBadge = (props) => {
  return (
    <Badge pill variant={props.color}>
      {props.text}
    </Badge>
  );
};

export default MyBadge;
