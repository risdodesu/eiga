import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import './index.css'

const breakPoints = [
  {width: 1, itemsToShow: 1},
  {width: 300, itemsToShow: 3},
  {width: 768, itemsToShow: 5},
  {width: 1200, itemsToShow: 6}
];

const API_KEY = process.env.REACT_APP_API_KEY;

const TopRated = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  },[]); 

  const getData = () => {
    axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`,
    })
      .then(function (response){
        setData(response.data.results)
      });
    }
    
    return (
        <>
            <Carousel breakPoints={breakPoints}>
                {data.map((item, index) => {
                return (
                    <Card className="bg-transparent text-white top-rated-card" key={index}>
                      <Card.Img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Card Popular" />
                      <Card.ImgOverlay className='top-rated-overlay'>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>ID : {item.id}</Card.Text>
                          <Card.Text>Popularity <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
                          <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
                          </svg>{item.popularity}
                          </Card.Text>
                      </Card.ImgOverlay>
                      <Card.Footer>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg> {item.vote_average}
                      </Card.Footer>
                    </Card>
                );
                })}
            </Carousel>
        </>
    )
}
export default TopRated;