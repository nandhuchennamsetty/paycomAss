import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Sliderel=()=>{
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
      return (
        <div className="carousel-con">
        <h2> Our Destination </h2>
        <Slider {...settings}>
          <div className="card">
            <img src="https://res.cloudinary.com/dly8bneey/image/upload/v1693720824/t3chvcuc1qxahwz7t3sl.png" alt="img-c" className="img-c"/>
            <h3 className="head-s">Harvard University</h3>
            <p className="para-s">Cambridge, Massachusetts, UK   ...</p>
          </div>
          <div className="card">
            <img src="https://res.cloudinary.com/dly8bneey/image/upload/v1693722764/mjpluqqnn1dstcs0dkxt.png" alt="img-c" className="img-c"/>
            <h3 className="head-s">Oxford University</h3>
            <p className="para-s">Oxford, England   ...</p>
          </div>
          <div className="card">
            <img src="https://res.cloudinary.com/dly8bneey/image/upload/v1693722994/vydspz6s7onugpu7ihyh.png" alt="img-c" className="img-c"/>
            <h3 className="head-s">Stanford University</h3>
            <p className="para-s">Stanford, Califormia   ...</p>
          </div>
          <div className="card">
            <img src="https://res.cloudinary.com/dly8bneey/image/upload/v1693723148/xyzuoitrj9y21zxj0p5l.png" alt="img-c" className="img-c"/>
            <h3 className="head-s">Harvard University</h3>
            <p className="para-s">Cambridge, Massachusetts, UK   ...</p>
          </div>
          <div className="card">
            <img src="https://res.cloudinary.com/dly8bneey/image/upload/v1693720824/t3chvcuc1qxahwz7t3sl.png" alt="img-c" className="img-c"/>
            <h3 className="head-s">Nanyang University</h3>
            <p className="para-s">Nanyang Ave, Singapura   ...</p>
          </div>
          <div className="card">
            <img src="https://res.cloudinary.com/dly8bneey/image/upload/v1693720824/t3chvcuc1qxahwz7t3sl.png" alt="img-c" className="img-c"/>
            <h3 className="head-s">Harvard University</h3>
            <p className="para-s">Cambridge, Massachusetts, UK   ...</p>
          </div>
          <div className="card">
            <img src="https://res.cloudinary.com/dly8bneey/image/upload/v1693720824/t3chvcuc1qxahwz7t3sl.png" alt="img-c" className="img-c"/>
            <h3 className="head-s">Harvard University</h3>
            <p className="para-s">Cambridge, Massachusetts, UK   ...</p>
          </div>
          <div className="card">
            <img src="https://res.cloudinary.com/dly8bneey/image/upload/v1693720824/t3chvcuc1qxahwz7t3sl.png" alt="img-c" className="img-c"/>
            <h3 className="head-s">Harvard University</h3>
            <p className="para-s">Cambridge, Massachusetts, UK   ...</p>
          </div>
        </Slider>
      </div>
      )
}
export default Sliderel
