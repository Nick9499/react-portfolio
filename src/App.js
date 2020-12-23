import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import SinglePost from './Component/SinglePost'
import Post from './Component/Post'
import Project from './Component/Project'


import './App.css';
import NavBar from './Component/NavBar'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
