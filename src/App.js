import About from "./components/About";
import Blank from "./components/Blank";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import ShowCase from "./components/ShowCase";
import "./sass/main.scss"

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Header></Header>
     <About></About>
     <ShowCase></ShowCase>
     <Blank></Blank>
     <Portfolio></Portfolio>
     <Footer></Footer>
    </div>
  );
}

export default App;
