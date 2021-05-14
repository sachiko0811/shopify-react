import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./pages/Home";
import ProductPage from './pages/ProductPage';

import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
