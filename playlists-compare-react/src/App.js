import "./App.css";
// import UserComponent from "./components/UserComponent";
// import PlaylistComponent from "./components/PlaylistComponent";
import SumPlaylistComponent from "./components/SumPlaylistComponent";
import FunctionClick from "./components/FunctionClick";
function App() {


  return (
    <div className="App">
      <header className="App-header">
        <p>Demo</p>
      </header>
      <section>
        {/* <PlaylistComponent></PlaylistComponent> */}
        <SumPlaylistComponent></SumPlaylistComponent>
        <FunctionClick></FunctionClick>
        
      </section>
    </div>
  );
}

export default App;
