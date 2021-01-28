import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Form from './form';
import Footer from './Footer';

function App() {
  return (
    <Router>
        <div class="wrapper">
          <Header/>
          <Menu/>
            <Switch>
                  <Route exact path='/' component={Dashboard} />
                  <Route path='/form' component={Form} />
            </Switch>
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
