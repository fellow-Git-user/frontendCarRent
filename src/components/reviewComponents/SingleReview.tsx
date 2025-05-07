import React from 'react';
import { Card, CardContent, CardHeader, Typography, Avatar, Rating } from '@mui/material';
import { SingleReviewProps } from '../../types/types';



const SingleReview: React.FC<SingleReviewProps> = ({ review }) => {
    const formattedDate = new Date(review.createdAt).toLocaleDateString(
        undefined,
        { year: 'numeric', month: 'long', day: 'numeric' }
    );

    return (
        <Card sx={{ mb: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <CardHeader
                avatar={
                    <Avatar
                        alt={review.user.name}
                        src={review.user.image || "https://via.placeholder.com/40"}
                        sx={{ width: 40, height: 40 }}
                    />
                }
                title={review.user.name}
                subheader={formattedDate}
            />
            <CardContent>
                <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                    {review.title}  
                </Typography>
                <Rating value={review.rating} readOnly precision={1} sx={{ mb: 1 }} />
                <Typography variant="body2" color="text.secondary">
                    {review.comment}  
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SingleReview;

