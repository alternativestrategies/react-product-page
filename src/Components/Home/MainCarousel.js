import React from 'react';
import {Carousel, Container} from 'react-bootstrap';

const MainCarousel = () => {
    return (
  <Container>
    <Carousel>
  <Carousel.Item>
    <img
      className="caro-img"
      src="/assets/img/writing.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Start Planning Early</h3>
      <p>Yearly Planners are a good way to give your year shape</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="caro-img"
      src="/assets/img/black-pencil.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Plan Your Week</h3>
      <p>Weekly Schedulers help you visualize what you have to get done for the week</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="caro-img"
      src="/assets/img/pink-journal.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Journal</h3>
      <p>Journalling is a good way to reflect on behavior and notice patterns</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </Container>
    );
}

export default MainCarousel;