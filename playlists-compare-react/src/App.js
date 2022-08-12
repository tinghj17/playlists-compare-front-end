import "./App.css";
import Navbar from "./components/Navbar";
import Compare from "./pages/Compare";
import Home from "./pages/Home";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/home":
      Component = Home;
      break;
    case "/compare":
      Component = Compare;
      break;
  }

  return (
    <>
    <div className="App">
      <header className="App-header">
        <p>Demo</p>

        <Navbar />
      </header>
      <Component/>
      
    </div>
    </>
  );
}

export default App;
