import { useSingleCar } from "../../pages/SingleCar/SingleCarContext"
import Carousel from 'react-bootstrap/Carousel';




const SingleCarPage: React.FC = () => {
    const { car, loading } = useSingleCar()
    console.log("🚀 ~ car:", car)
    

    
    if(loading) {
        return <p>LOADING</p>
    }
    

    return (
        <div>
            <h1>{car?.brand} {car?.model}</h1>
                <Carousel data-bs-theme="light">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={car?.albums.firstImage}
            alt="First slide"
            />
            <Carousel.Caption>
            <h5>{car?.brand} {car?.model}</h5>
            <p>This was made {car?.carMakeDate} and contains {typeof car?.engineDisplacement === "string" ? "" : ` ${car?.engineDisplacement} liter`} {car?.engine} engine.
                It uses {car?.transmission} transmission and {car?.passengerSeats} passengers are allowed in a vehicle. 
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://gtspirit.com/wp-content/uploads/2018/10/BMW-3-Series-G20-22.jpg"
            alt="Second slide"
            />
            <Carousel.Caption>
            <h5>{car?.brand} {car?.model}</h5>
            <p>This was made {car?.carMakeDate} and contains {typeof car?.engineDisplacement === "string" ? "" : ` ${car?.engineDisplacement} liter`} {car?.engine} engine.
                It uses {car?.transmission} transmission and {car?.passengerSeats} passengers are allowed in a vehicle. 
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://hips.hearstapps.com/hmg-prod/images/2019-bmw-3-series-mmp3-1552675365.jpg?crop=1.00xw:0.932xh;0,0.0550xh&resize=1200:*"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h5>{car?.brand} {car?.model}</h5>
            <p>This was made {car?.carMakeDate} and contains {typeof car?.engineDisplacement === "string" ? "" : ` ${car?.engineDisplacement} liter`} {car?.engine} engine.
                It uses {car?.transmission} transmission and {car?.passengerSeats} passengers are allowed in a vehicle. 
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
    )
}

export default SingleCarPage