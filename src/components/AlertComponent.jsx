import Alert from "react-bootstrap/Alert";

const WarningSign = (props) => {
  return (
    <Alert variant="danger">
      <Alert.Heading>{props.alertTitle}</Alert.Heading>
      <p>
        Change this and that and try again. Duis mollis, est non commodo luctus,
        nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis
        consectetur purus sit amet fermentum.
      </p>
    </Alert>
  );
};

export default WarningSign;
