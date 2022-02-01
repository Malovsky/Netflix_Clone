import "./App.css";
import Section from "./components/Section";
// Import du JSON
import data from "./assets/movies_rnexgr.json";
// Import de l'image
import Logo from "./assets/netflixlogo.png";

function App() {
  return (
    <div className="App">
      <img className="logo" src={Logo} alt="Logo Netflix" />
    </div>
  );
}

export default App;
