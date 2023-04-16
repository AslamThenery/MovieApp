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
import TvShows from './Pages/TvShows/TvShows';

function App() {
  return (
    <div className="App">
      <Router>

        <div className="container">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/tvShows" element={<TvShows />} />
          <Route path="/movie/:tmdbId" element={<MovieDetails />} />
          <Route element={<PageNotFound />} />

        </Routes>
        </div>
      </Router>
    
    </div>
  );
}

export default App;
