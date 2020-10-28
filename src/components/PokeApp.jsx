import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { store } from "../redux/store/store";
import '../styles/styles.scss'
import PokeCards from "./PokeCards";
import PokeDetail from "./PokeDetail";
import PokeScreen from "./PokeScreen";

function PokeApp() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={PokeScreen} />
          <Route extac path="/pokecards/:name" component={PokeDetail}/>
          <Route extac path="/pokecards" component={PokeCards} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default PokeApp;
