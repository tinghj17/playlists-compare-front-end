import "./App.css";
// import UserComponent from "./components/UserComponent";
import PlaylistComponent from "./components/PlaylistComponent";

function App() {

  const countNums = () => {
    let totalNums = 0;
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>Demo</p>
      </header>

      <section>
        <PlaylistComponent></PlaylistComponent>
        {/* <UserComponent></UserComponent> */}
        <h2>Playlists Selected: {countNums()}</h2>
      </section>
    </div>
  );
}

export default App;
