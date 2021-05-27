import About from "./components/About";
import Header from "./components/Header"
import Navbar from "./components/Navbar";
import ShowCase from "./components/ShowCase";
import "./sass/main.scss"

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Header></Header>
     <About></About>
     <ShowCase></ShowCase>
    </div>
  );
}

export default App;
