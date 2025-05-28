import { useSingleCar } from "../../pages/SingleCar/SingleCarContext";
import ReviewsList from "./ReviewsList";
import ReviewForm from "./ReviewForm";
import apiUser from "../../utils/apiUser";
import { useEffect, useState } from "react";
import { Review, ReviewFormValues } from "@/types/types";
import { Alert } from "@mui/material";

const ReviewsComponent: React.FC = () => {
  const { car, loading } = useSingleCar()
  const [ reviews, setReviews ] = useState<Review[]>([])
  const [ localLoading, setLocalLoading ] = useState(false)
  const [ error, setError ] = useState<string | null>(null)
  const [ alert, setAlert ] = useState<string | null>(null)

  useEffect(() => {
    const fetchReviews = async () => {
      if (!car || !car._id) {
        setReviews([])
        return;
      }

      setLocalLoading(true)
      setError(null)

      try{
        const response = await apiUser.get(`/cars/${car._id}/reviews`)

        if (response.status < 200 || response.status >= 300) {
          throw new Error(`Failed to fetch reviews: ${response.status} - ${response.statusText}`)
        }

        if (response.data.message === "This car has 0 reviews" || !response.data || response.data.length === 0 ) {
          setReviews([])
        } else {
          setReviews(response.data)
        }
        
      } catch (err: any) {
        console.error("Error fetching reviews:", err)
        setError(err.message || 'Failed to load reviews.')
        setReviews([])
      } finally {
        setLocalLoading(false)
      }
    }
    
    fetchReviews()
  }, [car]) //// Priklausomasis masyvas: paleisti is naujo kai car._id pasikeicia



   const handleReviewSubmit = async (reviewData: ReviewFormValues) => {

      if (!car?._id) {
        console.error("Car ID is not available for review submission.")
        return;
      }


      try {
        const payload = {
          title: reviewData.title,
          body: reviewData.body,
          rating: reviewData.rating
        }

        const response = await apiUser.post(`/cars/${car._id}/reviews`, payload)

        if (response.status >= 200 && response.status < 300) {
          const newReview = response.data
          console.log("Review submitted successfully:", newReview)

          setReviews(prevReviews => [ ...prevReviews, newReview ])
          setAlert("Review submitted successfully!");
        } else {
          console.error('Failed to submit review:', response)
          setAlert("Failed to submit review.")
        } 

      } catch (error) {
          console.error('Error submitting review:', error)
          setAlert("Error submitting review. Please try again.")
        }
  };

  const combinedLoading = loading || localLoading;
  

    return (
      <>
        {alert && <Alert severity="error">{alert}</Alert>}
        <ReviewsList reviews={reviews} loading={combinedLoading} error={error} />
        <ReviewForm onSubmit={handleReviewSubmit} />
      </>
      
    );
  };
  
  export default ReviewsComponent;