import { Commet } from "react-loading-indicators";
import { useSingleCar } from "../../pages/SingleCar/SingleCarContext";
import ReviewsList from "./ReviewsList";
import ReviewForm from "./ReviewForm";



const ReviewsComponent: React.FC = () => {
    
  

    return (
      <>
        <ReviewsList />
        <ReviewForm />
      </>
      
    );
  };
  
  export default ReviewsComponent;