import { Container, Row, Col, Button } from "react-bootstrap";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.css'

const API_KEY = process.env.REACT_APP_API_KEY;

const Introduction = () => {
  const [username, setUsername] = useState("")

  useEffect(()=> {
    const sessionID = localStorage.getItem("SID")
    if (sessionID) {
      axios({
        method: "get",
        url:`https://api.themoviedb.org/3/account?api_key=${API_KEY}&session_id=${sessionID}`
      }).then(function (response){
        setUsername(response.data.username)
      })
      .catch(function(error){
        alert(error.message)
      })
    }
  },[])
  
    return (
        <div className="intro">
          <Container className="text-white d-flex justify-content-center align-item-center">
            <Row>
              <Col>
                <div className="title">Hello {username},</div>
                <div className="title2">Happy Watching !</div>
                <div className="mt-3 text-center">
                <Button variant="outline-warning">See All Movies</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}
export default Introduction;