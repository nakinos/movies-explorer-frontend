import { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';


function App() {

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const openSideMenu = () => {
    setIsSideMenuOpen(true);
  };

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <div className="App">
      <Header onBurgerButtonClick={openSideMenu}/>
      <Switch>
        <Route path="/sign-up">

        </Route>
      </Switch>
      <Navigation isOpen={isSideMenuOpen} onCloseClick={closeSideMenu} />
    </div>
  );
}

export default App;
