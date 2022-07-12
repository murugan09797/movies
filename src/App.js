import { React } from 'react';
import './App.css';
import Content from './Pages/Content';
import Home from './Pages/Home';
import Search from './Pages/Search';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";




function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Search" component={Search} />
          <Route path="/Content" component={Content} />
          {/* <Route path="/notFound" component={NotFound} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
