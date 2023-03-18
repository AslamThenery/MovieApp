import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import MovieDetails from './Components/MovieDetails/MovieDetails';

import PageNotFound from './Pages/PageNoteFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>

        <div className="container">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/movie/:tmdbId" element={<MovieDetails />} />
          <Route element={<PageNotFound />} />

        </Routes>
        </div>
      </Router>
    
    </div>
  );
}

export default App;
