import "./App.css";
import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { mainApi } from "../../utils/MainApi";
import { useHistory } from "react-router-dom";
import { SUCCESS_EDIT_PROFILE } from "../../constants/constants";

function App() {
  const history = useHistory();
  const openPath = history.location.pathname;
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [registerErrorMessage, setRegisterErrorMessage] = useState("");
  const [editProfileMessage, setEditProfileMessage] = useState("");
  const [isErrorProfileMessage, setIsErrorProfileMessage] = useState(false);

  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [isEditLoading, setIsEditLoading] = useState(false);

  useEffect(() => {
    const currentUserId = localStorage.getItem("userId");
    if (currentUserId) {
      mainApi
        .checkToken()
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push(openPath);
          } else {
            localStorage.removeItem("userId");
          }
        })
        .catch((err) => localStorage.removeItem("userId"));
    }
  }, []);

  useEffect(() => {
    const currentUserId = localStorage.getItem("userId");
    if (currentUserId && loggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
        .then(([currenUserInfo, moviesData]) => {
          setCurrentUser(currenUserInfo);
          setFavoriteMovies(moviesData);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loginErrorMessage !== "" || registerErrorMessage !== "" || editProfileMessage !== "") {
      setTimeout(() => {
        setLoginErrorMessage("");
        setRegisterErrorMessage("");
        setEditProfileMessage("");
      }, 3000);
    }
  }, [loginErrorMessage, registerErrorMessage, editProfileMessage]);

  function handleSignUp({ name, email, password }, resetFormFn) {
    setIsRegisterLoading(true);
    mainApi
      .signup({ name, email, password })
      .then(() => {
        setTimeout(() => handleSignIn({ email, password }, resetFormFn), 500);
      })
      .catch((err) => {
        setRegisterErrorMessage(err.message);
      })
      .finally(() => {
        setIsRegisterLoading(false);
      });
  }

  function handleSignIn({ email, password }, resetFormFn) {
    setIsLoginLoading(true);
    mainApi
      .signin({ email, password })
      .then((data) => {
        if (data._id) {
          localStorage.setItem("userId", data._id);
          setLoggedIn(true);
          history.push("/movies");
        }
        resetFormFn();
      })
      .catch((err) => {
        setLoginErrorMessage(err.message);
      })
      .finally(() => {
        setIsLoginLoading(false);
      });
  }

  function handleSignOut() {
    mainApi
      .signout()
      .then(() => {
        localStorage.removeItem("userId");
        setLoggedIn(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditProfile({ name, email }) {
    setIsEditLoading(true);
    mainApi
      .editUserInfo({ name, email })
      .then((userData) => {
        setCurrentUser({ ...currentUser, ...userData });
        setIsErrorProfileMessage(false);
        setEditProfileMessage(SUCCESS_EDIT_PROFILE);
      })
      .catch((err) => {
        setIsErrorProfileMessage(true);
        setEditProfileMessage(err.message);
      })
      .finally(() => setIsEditLoading(false));
  }

  function handleBackButton() {
    history.goBack();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route path="/signin" exact>
            <Login onLogin={handleSignIn} errorMessage={loginErrorMessage} isLoading={isLoginLoading} />
          </Route>
          <Route path="/signup" exact>
            <Register onRegister={handleSignUp} errorMessage={registerErrorMessage} isLoading={isRegisterLoading} />
          </Route>
          <Route path="/" exact>
            <Header loggedIn={loggedIn} />
            <main className="main">
              <Main />
            </main>
            <Footer />
          </Route>
          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Header loggedIn={loggedIn} />
            <main className="main">
              <Profile
                onLogOut={handleSignOut}
                onEdit={handleEditProfile}
                message={editProfileMessage}
                isError={isErrorProfileMessage}
                isLoading={isEditLoading}
              />
            </main>
          </ProtectedRoute>
          <ProtectedRoute path="/movies" loggedIn={loggedIn}>
            <Header loggedIn={loggedIn} />
            <main className="main">
              <Movies favoriteMovies={favoriteMovies} setFavoriteMovies={setFavoriteMovies} />
            </main>
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
            <Header loggedIn={loggedIn} />
            <main className="main">
              <SavedMovies movies={favoriteMovies} setFavoriteMovies={setFavoriteMovies} />
            </main>
            <Footer />
          </ProtectedRoute>
          <Route path="*">
            <NotFound onBackButtonHandle={handleBackButton} />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
