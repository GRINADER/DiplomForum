import React from "react";
import { Card, Col, Container, Row, Button, Popover, OverlayTrigger, ProgressBar } from "react-bootstrap";
import Jumbotron from "../Components/Jumbotron";
import Slider from "../Components/Slider";
import unknown from "../Components/images/unknown.png";
import bnight from "../Components/images/BlueNight.jpg";
import csfight from "../Components/images/CastleFight.jpeg";
import mjump from "../Components/images/MagicJumps.jpg";
import tlsword from "../Components/images/ThreeLvlsSword.jpg";

export const Home = () => (
  <>
    <Slider />
    {/* <ProgressBar now={60} /> */}
    {/* <Example/>   */}
    <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={csfight} />
            <Card.Body>
              <Card.Title> CastleFight </Card.Title>
              <Card.Text>Славная битва</Card.Text>
              <Button variant="primary">Играть</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={mjump} />
            <Card.Body>
            <Card.Title> Magic Jump</Card.Title>
              <Card.Text>Преодолей высоту</Card.Text>
              <Button variant="primary">Играть</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={tlsword} />
            <Card.Body>
            <Card.Title> ThreeLvlsSword</Card.Title>
              <Card.Text>Три уровня битвы</Card.Text>
              <Button variant="primary">Играть</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Jumbotron />
    <Container style={{marginBottom: '30px'}}>
      <Row>
        <Col md={7}>
          <img src={bnight} height={300} />
        </Col>
        <Col md={5}>
          <h2>Попробуйте это!</h2>
          <p>
            Новый скин для локации: темная ночь
          </p>
        </Col>
      </Row>
    </Container>
  </>
);
