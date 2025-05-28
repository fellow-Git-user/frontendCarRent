import { Commet } from "react-loading-indicators";
import { Grid2, Typography } from '@mui/material';
import SingleReview from './SingleReview'; // Import the SingleReview component
import { ReviewsListProps } from '@/types/types';



const ReviewsList: React.FC<ReviewsListProps> = ({ reviews, loading, error }) => {
    // const { car, loading } = useSingleCar();
    // const [reviewsData, setReviewsData, ] = useState<any[] | null>(null);
    // const [localLoading, setLocalLoading] = useState(false);
    // const [error, setError] = useState<string | null>(null);


    // useEffect(() => {
    //     if (car && car._id) {
    //         setLocalLoading(true)
    //         setError(null)

    //         const fetchReviews = async () => {
    //             try {
    //                 const response = await apiUser.get(`/cars/${car._id}/reviews`)
                    
    //                 if(response.status < 200 || response.status >= 300){
    //                     throw new Error(`Failed to fetch reviews: ${response.status} - ${response.statusText}`);
    //                 }

    //                 if (response.data.message === "This car has 0 reviews") {
    //                     setReviewsData([])
    //                 } else {
    //                     setReviewsData(response.data)
    //                 }

    //             } catch (error: any) {
    //                 setError(error.message)
    //                 setReviewsData(null);
    //             } finally {
    //                 setLocalLoading(false)
    //             }
            
    //         } 
    //         fetchReviews()
    //     }
            
    // }, [car])

    if (loading) {
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

    if (!reviews || reviews.length === 0) {
        return (
            <div style={{ marginTop: '16px', textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                    No reviews yet. Be the first to review!
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
                {reviews.map(review => (
                    <Grid2 key={review._id} size={{xs:12, sm:6, md:4, lg:3}}> 
                        <SingleReview review={review} />
                    </Grid2>
                ))}
            </Grid2>
        </div>
    );
};

export default ReviewsList;

