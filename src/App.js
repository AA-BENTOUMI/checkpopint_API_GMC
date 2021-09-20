import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cocktails from "./Pages/Cocktails/Cocktails";
import Cocktail from "./Pages/Cocktail/Cocktail";
import Error from "./Pages/Error/Error";
import NavLinks from "./Components/Navbar/NavLinks";

function App() {
  return (
    <div className="App">
      <NavLinks />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Cocktails" component={Cocktails} />
        <Route path="/Cocktails/Cocktail/:idDrink" component={Cocktail} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
