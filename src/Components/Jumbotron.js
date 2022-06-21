import React from "react";
import { Container, Popover, OverlayTrigger } from "react-bootstrap";
import unknown from "../Components/images/unknown.png";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import naruto from "../Components/images/Naruto.png"


const Styles = styled.div`
  .jumbo {
    background: url(${naruto}) no-repeat fixed bottom;
    background-size: cover;
    color: white; //$efefef черный
    height: 400px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index-1: -1;
  }
`;

const Jumbotron = () => (
  <Styles>
    <div className="jumbo p-5 mb-4 bg-primary rounded-3">
      <div className="overlay container-fluid ppy-5">
        <Container>
          <h1 className="display-5 fw-bold">Привет! Ты готов ?</h1>
          <p className="col-md-8 fs-4">
            Ты уже попробовал сыграть ? Как тебе атмосфера ?
            Расскажи всем о нашей игре !
          </p>
          {/* <Example/> */}
          
        </Container>
      </div>
    </div>
  </Styles>
);

export default Jumbotron;
