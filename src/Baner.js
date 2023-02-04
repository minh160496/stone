import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/esm/Button";

function Slide() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.eldoradostone.com/wp-content/uploads/2022/11/home-slide3-img1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>THE START OF SOMETHING BEAUTIFUL</h3>
          <Button className="btn-banner">FIND A DEALER</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://www.eldoradostone.com/wp-content/uploads/2022/11/home-slide1-img1-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>THE START OF SOMETHING BEAUTIFUL</h3>{" "}
          <Button className="btn-banner">FIND A DEALER</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.eldoradostone.com/wp-content/uploads/2022/11/home-slide2-img1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>THE START OF SOMETHING BEAUTIFUL</h3>
          <Button className="btn-banner">FIND A DEALER</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function Banner({ data }) {
  return (
    <div className="banner position-relative">
      <Slide />
    </div>
  );
}

export default Banner;
