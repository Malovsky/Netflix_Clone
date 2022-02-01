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
      {data.map((category, index) => {
        console.log(category);
        return (
          <Section
            key={index}
            category={category.category}
            films={category.images}
          />
        );
      })}
    </div>
  );
}

export default App;
