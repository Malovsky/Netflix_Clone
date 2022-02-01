import "./App.css";
import Section from "./components/Section";
// Import du JSON
import data from "./assets/movies_rnexgr.json";
// Import de l'image
import AppLogo from "./assets/netflixlogo.png";

function App() {
  return (
    <div className="App">
      <img className="logo" src={AppLogo} alt="Logo Netflix" />
      {data.map((item, index) => {
        return (
          <Section key={index} category={item.category} films={item.images} />
        );
      })}
    </div>
  );
}

export default App;
