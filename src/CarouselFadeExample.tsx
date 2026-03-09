import Carousel from 'react-bootstrap/Carousel';
import ferrari from "./assets/ferrari.avif"
import supra from "./assets/supra.avif"
import mclaren from "./assets/mclaren.jpg"



function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={ferrari} alt="First slide" />
        <Carousel.Caption>
          <h1 style={{ color: "white" }}>Unleash Your Vehicle's Full Potential</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={supra} alt="First slide" />
        <Carousel.Caption>
          <h1 style={{ color: "white" }}>Expert Care Your Car Deserves</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={mclaren} alt="First slide" />
        <Carousel.Caption>
          <h1 style={{ color: "white" }}>Start Your Journey Today</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;