import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import About from "./components/About";
import MovieList from "./components/MovieList";
import MoviePage from "./components/MoviePage";
import Nav from "./components/Nav";
import NotFound from "./components/404";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Categorized from "./components/Categorized";
import ResponsiveNav from "./components/ResponsiveNav";
import { GrMenu } from 'react-icons/gr';
import Search from './components/Search';
import SearchResults from './components/SearchResults';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('')

  return (
    <>
      <Router>

        <Nav />
        
        <div className="bar" onClick={() => setIsOpen(!isOpen)}>
            <GrMenu />
        </div>
        
        <Search search={search} setSearch={setSearch} />

        {isOpen && <ResponsiveNav />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hakkinda" component={About} />
          <Route exact path="/filmler" component={MovieList} />
          <Route path="/filmler/film/:id" component={MoviePage} />
          <Route exact path="/kategoriler" component={Categories} />
          <Route
            path="/kategoriler/kategori/:genreId"
            component={Categorized}
          />
          <Route path="/search/:value" component={() => <SearchResults search={search} />} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
