import "./App.css";
import "./App.scss";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <h1 className="title">SCSS LIBRARY</h1>
        <Container />
      </div>
    </>
  );
}

export default App;
