import "./App.css";
// import UserComponent from "./components/UserComponent";
// import PlaylistComponent from "./components/PlaylistComponent";
import SumPlaylistComponent from "./components/SumPlaylistComponent";

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <p>Demo</p>
      </header>

      <section>
        {/* <PlaylistComponent></PlaylistComponent> */}
        <SumPlaylistComponent></SumPlaylistComponent>

      </section>
    </div>
  );
}

export default App;
