import "./App.css";
// import UserComponent from "./components/UserComponent";
import PlaylistComponent from "./components/PlaylistComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Demo</p>
      </header>

      <section>
        <PlaylistComponent></PlaylistComponent>
        {/* <UserComponent></UserComponent> */}
      </section>
    </div>
  );
}

export default App;
