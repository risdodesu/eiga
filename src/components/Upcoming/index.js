import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './index.css'

const API_KEY = process.env.REACT_APP_API_KEY;

const Upcoming = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  },[]); 

  const getData = () => {
    axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=1`,
    })
      .then(function (response){
        setData(response.data.results)
      });
    }

  return (
    <>
      <Carousel inner fade>
        
        {data.map((item, index) => {
            return (
                <Carousel.Item key={index}>
                    <img
                      className='upcoming-carousel'
                      src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                      alt="Carousel"
                    />
                  <Carousel.Caption style={{left:"0%",right:"0%",bottom:"0%"}} className="upcoming-caption">
                      <h1 className='upcoming-title'>{item.title}</h1>
                      <p className="upcoming-overview">{item.overview}</p>
                      <button type='button' className='upcoming-btn'>Watch Trailer</button>
                  </Carousel.Caption>
                </Carousel.Item>
              )
          })}
        
      </Carousel>
    </>
  );
}

export default Upcoming;