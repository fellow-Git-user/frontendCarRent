import { Commet } from "react-loading-indicators";
import { useSingleCar } from "../../pages/SingleCar/SingleCarContext";
import ReviewsList from "./ReviewsList";
import ReviewForm from "./ReviewForm";
import apiUser from "../../utils/apiUser";
import { useState } from "react";

const ReviewsComponent: React.FC = () => {

  const { car } = useSingleCar();
  const [newReview, setNewReview] = useState<any>(null);

   const handleReviewSubmit = async (reviewData: ReviewFormValues) => {
      if (!car) return;

      try {
          const response = await apiUser.post(`/cars/${car._id}/reviews`, reviewData);
          if (response.status >= 200 && response.status < 300) {
              setNewReview(response.data); 
              
              console.log("Review submitted successfully:", response.data);
          } else {
              console.error("Failed to submit review:", response);
              
          }
      } catch (error) {
          console.error("Error submitting review:", error);
           
      }
  };
  

    return (
      <>
        <ReviewsList />
        <ReviewForm onSubmit={handleReviewSubmit} />
      </>
      
    );
  };
  
  export default ReviewsComponent;