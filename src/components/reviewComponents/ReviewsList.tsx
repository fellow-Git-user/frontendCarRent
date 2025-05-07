import React, { useEffect, useState } from 'react';
import { Commet } from "react-loading-indicators";
import { useSingleCar } from "../../pages/SingleCar/SingleCarContext";
import { Grid2, Typography } from '@mui/material';
import SingleReview from './SingleReview'; // Import the SingleReview component
import apiUser from '../../utils/apiUser';



const ReviewsList: React.FC = () => {
    const { car, loading } = useSingleCar();
    const [reviewsData, setReviewsData, ] = useState<any[] | null>(null);
    const [localLoading, setLocalLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        if (car && car._id) {
            setLocalLoading(true)
            setError(null)

            const fetchReviews = async () => {
                try {
                    const response = await apiUser.get(`/cars/${car._id}/reviews`)
                    
                    if(response.status < 200 || response.status >= 300){
                        throw new Error(`Failed to fetch reviews: ${response.status} - ${response.statusText}`);
                    }

                    if (response.data.message === "This car has 0 reviews") {
                        setReviewsData([])
                    } else {
                        setReviewsData(response.data)
                    }

                } catch (error: any) {
                    setError(error.message)
                    setReviewsData(null);
                } finally {
                    setLocalLoading(false)
                }
            
            } 
            fetchReviews()
        }
            
    }, [car])

    if (loading || localLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                <Commet color="#5d5d5d" size="medium" text="Loading reviews..." textColor="#5d5d5d" />
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ marginTop: '16px', textAlign: 'center', color: 'red' }}>
                Error: {error}
            </div>
        );
    }

    if (!reviewsData || reviewsData.length === 0) {
        return (
            <div style={{ marginTop: '16px', textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                    No reviews yet.
                </Typography>
            </div>
        );
    }

    return (
        <div>
            <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
                Reviews
            </Typography>
            <Grid2 container spacing={4}> 
                {reviewsData.map(review => (
                    <Grid2 key={review._id}> 
                        <SingleReview review={review} />
                    </Grid2>
                ))}
            </Grid2>
        </div>
    );
};

export default ReviewsList;

