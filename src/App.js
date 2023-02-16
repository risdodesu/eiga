import "./components/Styles/App.css"
import NavigationBar from "./components/NavigationBar";
import Introduction from "./components/Introduction";
import SearchBar from "./components/SearchBar";
import Upcoming from "./components/Upcoming";
import Container from 'react-bootstrap/Container';
// import { Row, Col } from "react-bootstrap";
import Footer from "./components/Footer";
import PopularCard from "./components/PopularCard";
import TopRated from "./components/TopRated";
import Fade from 'react-reveal/Fade';
import './index.css'


const App = () => {
    
  return (
    <>
      <div className="main">
        <NavigationBar/>
          <Fade top>
            <div className="upcoming-carousel">
              <Upcoming/>
            </div>
            <Introduction/>
            <div className="search-bar">
              <SearchBar/>
            </div>
            <div className="mt-3 container">
              <h3 className="title-sub">Popular Movies</h3>
            </div>
            <Container>
                <PopularCard/>
            </Container>
            <div className="mt-3 container">
              <h3 className="title-sub">Top Rated Movies</h3>
            </div>
            <Container>
                <TopRated/>
            </Container>
          </Fade>
          <div className="mt-3">
            <Footer/>
          </div>
      </div>
    </>
  );
}

export default App;
