import "./components/Styles/App.css"
import NavigationBar from "./components/NavigationBar";
import Introduction from "./components/Introduction";
import SearchBar from "./components/SearchBar";
import Upcoming from "./components/Upcoming";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "./components/Footer";
import PopularCard from "./components/PopularCard";
import TopRated from "./components/TopRated";
import Fade from 'react-reveal/Fade';


const App = () => {
    
  return (
    <>
      <div className="main">
          <NavigationBar/>
        <Fade top>
          <Introduction/>
          <div className="search-bar">
            <SearchBar/>
          </div>
          <Container className="mt-5">
            <Row>
              <Col sm={12}><Upcoming/></Col>
            </Row>
          </Container>
          <div className="mt-3 container">
            <h1 className="title-sub">Popular Movies</h1>
          </div>
          <Container>
            <Row>
              <PopularCard/>
            </Row>
          </Container>
          <div className="mt-3 container">
            <h1 className="title-sub">Top Rated Movies</h1>
          </div>
          <Container>
            <Row>
              <TopRated/>
            </Row>
          </Container>
          <div>
            <Footer/>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default App;
