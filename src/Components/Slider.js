import { Carousel } from "react-bootstrap";
import React from "react";
import naruto from "./images/Naruto.png";
import mountains from "./images/Mountains.png";
import jungle from "./images/JungleBridge.jpg";
import graveMan from "./images/Graveyard-Keeper.jpg"

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "400px" }}>
        <img className="d-block w-100"
        src={graveMan} 
        alt="First slide" />
        <Carousel.Caption>
          <h3>Открытый</h3>
          <p>и умиротворяющий</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "400px" }}>
        <img className="d-block w-100" src={mountains} alt="Second slide" />
        <Carousel.Caption>
          <h3>Красивые места</h3>
          <p>и пейзажи</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "400px" }}>
        <img className="d-block w-100" src={jungle} alt="Third slide" />
        <Carousel.Caption>
          <h3>Спокойное место</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
