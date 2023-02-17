import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import PopularCard from './components/PopularCard';
import SearchBar from './components/SearchBar';
import Upcoming from './components/Upcoming';
import TopRated from './components/TopRated';
import Login from './components/Login';
import NavigationBarGuest from './components/NavigationBarGuest';
import Container from 'react-bootstrap/Container';
import IntroductionGuest from './components/IntroductionGuest';
import Fade from 'react-reveal/Fade';
import { Navigate } from 'react-router-dom';
import Popular from './components/Popular';


const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <div className='main'>
        <NavigationBarGuest/>
            <Fade top>
              <div className="upcoming-carousel">
                <Upcoming/>
              </div>
              <IntroductionGuest/>
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
            <div className="mt-3 footer">
              <Footer/>
            </div>
        </div>
    </>,
    errorElement: <p>Page Not Found</p>,
  },
  {
    path: "/homepage",
    element: localStorage.getItem("SID") ?  
    <>
      <div className='main'>
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
            <div className="mt-3 footer">
              <Footer/>
            </div>
      </div>
    </> : <Navigate replace to="/login"/>,
    errorElement: <p>Page Not Found</p>,
  },
  {
    path: "/popular",
    element: localStorage.getItem("SID") ? <>
    <div className='main'>
      <NavigationBar/>
          <Fade top>
            <div className="search-bar mt-5">
              <SearchBar/>
            </div>
            <div>
              <h1 className='d-flex align-item-cente justify-content-center mt-5 text-white'>Popular Movies</h1>
            </div>
            <div className='popular-container'>
              <Popular/>
            </div>
          <div className="mt-3 footer">
            <Footer/>
          </div>
          </Fade>
    </div>
  </> : <Navigate replace to="/login"/>,
    errorElement: <p>Page Not Found</p>,
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <p>Page Not Found</p>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} /> 
);