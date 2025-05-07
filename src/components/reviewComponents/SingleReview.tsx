import React from 'react';
import { Card, CardContent, CardHeader, Typography, Avatar, Box } from '@mui/material';
import { MessageRounded } from '@mui/icons-material';
import { SingleReviewProps } from '../../types/types';



const SingleReview: React.FC<SingleReviewProps> = ({ review }) => {
    const formattedDate = new Date(review.createdAt).toLocaleDateString(
        undefined,
        { year: 'numeric', month: 'long', day: 'numeric' }
    );

    return (
        <Card elevation={2} sx={{  transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ backgroundColor: '#b3e5fc', color: '#0288d1' }}>
                        <MessageRounded />
                    </Avatar>
                }
                title={
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#222' }}>
                            {review.user.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {formattedDate} - {review.rating} / 5
                        </Typography>
                    </Box>
                }

            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, lineHeight: '1.5' }}>
                    {review.comment}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SingleReview;

