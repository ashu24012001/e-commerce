import { Carousel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ProductCarouselComponent = () => {
  let cursorPointer = {
    cursor: 'pointer',
  };
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{ height: '300px', objectFit: 'cover' }}
          src="/images/carousel/carousel-1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorPointer} to="/productdetails">
            <h3>Bestseller in Laptops category</h3>
          </LinkContainer>
          <p>HP Elite Dragonfly G3</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: '300px', objectFit: 'cover' }}
          src="/images/carousel/carousel-2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorPointer} to="/productdetails">
            <h3>Bestseller in Books category</h3>
          </LinkContainer>
          <p>Eloquent Javascript: by Marijn Haverbake</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: '300px', objectFit: 'cover' }}
          src="/images/carousel/carousel-3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorPointer} to="/productdetails">
            <h3>Bestseller in Cameras category</h3>
          </LinkContainer>
          <p>Nikon D3500 · DSLR · APS-C</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;
