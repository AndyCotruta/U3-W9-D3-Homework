import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import JumbotronComponent from "./components/JumbotronComponent";
import WarningSign from "./components/AlertComponent";
import MyBadge from "./components/Mybadge";
import BookList from "./components/BookListComponent";

function App() {
  return (
    <div className="body">
      {" "}
      <JumbotronComponent />
      <WarningSign alertTitle="This is the alert title" />
      <MyBadge text="This text is passed as a prop" color="danger" />
      <BookList />
    </div>
  );
}

export default App;
