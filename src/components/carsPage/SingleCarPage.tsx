import { useSingleCar } from "../../pages/SingleCar/SingleCarContext";
import Carousel from 'react-bootstrap/Carousel';
import React from 'react'; 
import classes from "../../cssModules/SingleCarPage.module.css"
import ReviewsComponent from "../reviewComponents/ReviewsComponent";



const SingleCarPage: React.FC = () => {
    const { car, loading } = useSingleCar();
    
  
    if (loading) {
      return <p>LOADING</p>;
    }
  
    const carouselItems = car?.albums?.flatMap((album, albumIndex) => {
      const items = [];
      const keyBase = album._id || `album-${albumIndex}`;
  
      if (album.firstImage) {
        items.push(
          <Carousel.Item key={`${keyBase}-first`} className={classes.carouselItemFixedHeight}>
            <img
              className={`d-block w-100 ${classes.carouselImageFill}`}
              src={album.firstImage}
              alt={`${car?.brand} ${car?.model} - Image 1 from album ${keyBase}`}
            />
            <Carousel.Caption>
              <h5>{car?.brand} {car?.model}</h5>
            <p>This car was made {car?.carMakeDate} and contains {typeof car?.engineDisplacement === "string" ? "" : ` ${car?.engineDisplacement}liter`} {car?.engine} engine.
                It uses {car?.transmission} transmission and {car?.passengerSeats} passengers are allowed in a vehicle. 
            </p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      }
      if (album.secondImage) {
        items.push(
          <Carousel.Item key={`${keyBase}-second`} className={classes.carouselItemFixedHeight}>
            <img
              className={`d-block w-100 ${classes.carouselImageFill}`}
              src={album.secondImage}
              alt={`${car?.brand} ${car?.model} - Image 2 from album ${keyBase}`}
            />
            <Carousel.Caption>
              <h5>{car?.brand} {car?.model}</h5>
            <p>This car was made {car?.carMakeDate} and contains {typeof car?.engineDisplacement === "string" ? "" : ` ${car?.engineDisplacement}liter`} {car?.engine} engine.
                It uses {car?.transmission} transmission and {car?.passengerSeats} passengers are allowed in a vehicle. 
            </p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      }
      if (album.thirdImage) {
        items.push(
          <Carousel.Item key={`${keyBase}-third`} className={classes.carouselItemFixedHeight}>
            <img
              className={`d-block w-100 ${classes.carouselImageFill}`}
              src={album.thirdImage}
              alt={`${car?.brand} ${car?.model} - Image 3 from album ${keyBase}`}
            />
            <Carousel.Caption>
              <h5>{car?.brand} {car?.model}</h5>
            <p>This car was made {car?.carMakeDate} and contains {typeof car?.engineDisplacement === "string" ? "" : ` ${car?.engineDisplacement}liter`} {car?.engine} engine.
                It uses {car?.transmission} transmission and {car?.passengerSeats} passengers are allowed in a vehicle. 
            </p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      }
      return items;
    }) || [];
    console.log("🚀 ~ car:", car)
    return (

        <div>
          <h1>{car?.brand} {car?.model}</h1>
          {carouselItems.length > 0 ? (
            <Carousel data-bs-theme="light">
              {carouselItems}
            </Carousel>
          ) : (
            <p>No images available for this car.</p>
          )}
        </div>
          

    );
  };
  
  export default SingleCarPage;