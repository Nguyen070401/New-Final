import './App.css';
import GiftPage from './pages/GiftPage';
import Home from './pages/Home';
import JewelryPage from './pages/JewelryPage';
import Product from './pages/Product';
import WatchPage from './pages/WatchPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
  <Router>
   <Switch>
     <Route exact path="/">
        <Home/>
     </Route>

     <Route path="/register">
        <GiftPage/>
     </Route>
     <Route path="/login">
        <JewelryPage/>
     </Route>
     <Route path="/write">
        <ContactPage/>
     </Route>
     <Route path="/settings">
        <LoginPage/>
     </Route>

     <Route path="/post/:postId">
        <WatchPage/>
     </Route>
   </Switch>
  </Router>
  );
}

export default App;
