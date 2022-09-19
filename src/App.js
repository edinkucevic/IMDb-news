import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/homePage/HomePage';
import MovieList from './components/MovieList/movieList';
import Movie from './pages/movieDetail/movieDetail';
import SerieList from './components/SeriesList/seriesList';
import Serie from "./pages/movieDetail/movieDetail"
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import classes from "./App.css";


function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
                <Route path="serie/:id" element={<Serie />}></Route>
                <Route path="serie/:type" element={<SerieList />}></Route>
            </Routes>
        </Router>

        <Box className={classes.footer}>
        <BottomNavigation
          style={{
            backgroundColor: "black",
          }}
        >
          <h4 className={classes.footertext}>
            2022 <em>Copyright</em> Edin Kucevic
          </h4>
        </BottomNavigation>
      </Box>
    </div>
  );
}

export default App;