import React, { useEffect, useState } from 'react';
import { Commet } from "react-loading-indicators";
import { useSingleCar } from "../../pages/SingleCar/SingleCarContext";
import { Grid2, Typography } from '@mui/material';
import SingleReview from './SingleReview'; // Import the SingleReview component
import apiUser from '../../utils/apiUser';

// // Mock review data (replace with actual data fetching)
// const mockReviews = {
//     "681b1ef5365cef9fb5c83bd5": {
//         _id: "681b1ef5365cef9fb5c83bd5",
//         user: { name: "John Doe" },
//         comment: "Great car! I loved the handling.",
//         rating: 5,
//         createdAt: "2024-07-28T12:00:00Z"
//     },
//     "681b26fb6168a241d4b2da4a": {
//         _id: "681b26fb6168a241d4b2da4a",
//         user: { name: "Jane Smith" },
//         comment: "The interior was very comfortable.",
//         rating: 4,
//         createdAt: "2024-07-27T10:30:00Z"
//     },
//     "some-non-existent-id": {
//         _id: "some-non-existent-id",
//         user: {name: "Invalid User"},
//         comment: "This review should not be shown",
//         rating: 1,
//         createdAt: "2025-01-01T00:00:00Z"
//     }
// };

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

