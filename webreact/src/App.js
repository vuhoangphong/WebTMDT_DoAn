import logo from './logo.svg';
import './App.css';
import test from './component/test'
import home from './component/home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={home}/>  
            <Route path="/test" component={test}/>
          </Switch>
        </Router>
        
     
    </div>
  );
}

export default App;
