import Carousel from 'react-bootstrap/Carousel';

function CarouselHome() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item className='carousel-item-wrapper' interval={1000}>
        <img
          className="carousel-img d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_960_720.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className='carousel-item-wrapper' interval={500}>
        <img
          className="carousel-img d-block w-100"
          src="https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_960_720.jpg"
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className='carousel-item-wrapper'>
        <img
          className="carousel-img d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
