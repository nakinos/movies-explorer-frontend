import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import data from "../../utils/data.json";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  const cards = data.slice(0, 12);
  const likedCards = data.slice(0, 3);

  return (
    <div className="App">
      <Switch>
        <Route path="/signin" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Register />
        </Route>
        <Route path="/" exact>
          <Header />
          <main className="main">
            <Main />
          </main>
          <Footer />
        </Route>
        <Route path="/profile" exact>
          <Header />
          <main className="main">
            <Profile />
          </main>
        </Route>
        <Route path="/movies" exact>
          <Header />
          <main className="main">
            <Movies cards={cards} />
          </main>
          <Footer />
        </Route>
        <Route path="/saved-movies" exact>
          <Header />
          <main className="main">
            <SavedMovies cards={likedCards} />
          </main>
          <Footer />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
