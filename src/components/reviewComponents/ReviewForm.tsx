import React from 'react';
import { TextField, Button, Rating, Box, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ReviewFormProps, ReviewFormValues } from '@/types/types';

const reviewFormSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }).max(100),
    body: z.string().min(1, { message: "Review text is required" }).max(500),
    rating: z.number().min(1, { message: "Rating is required" }).max(5),
});



const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<ReviewFormValues>({
        resolver: zodResolver(reviewFormSchema),
        defaultValues: {
            title: '',
            body: '',
            rating: 5,
        },
    });

    
    const handleFormSubmit = (data: ReviewFormValues) => {
        onSubmit(data); 
        reset(); 
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(handleFormSubmit)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                width: '100%',
                maxWidth: '600px',
                margin: '0 auto',
                padding: 3,
                border: '1px solid #ddd',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                backgroundColor: '#fff',
            }}
        >
            <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', color: '#333', mb: 1 }}>
                Write a Review
            </Typography>

           
            <Controller
                name="title"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Review Title" 
                        variant="outlined" 
                        error={!!errors.title} 
                        helperText={errors.title?.message} 
                        placeholder="Enter a title for your review"
                        fullWidth 
                    />
                )}
            />

            
            <Controller
                name="body"
                control={control}
                render={({ field }) => (
                    <TextField 
                        {...field}
                        label="Review Text" 
                        placeholder="Write your review here..."
                        multiline 
                        rows={4} 
                        variant="outlined" 
                        fullWidth 
                        error={!!errors.body} 
                        helperText={errors.body?.message} 
                        
                    />
                )}
            />

           
            <Controller
                name="rating"
                control={control}
                render={({ field }) => (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography component="legend" sx={{ fontWeight: 'medium', color: '#333' }}>Rating:</Typography>
                        <Rating
                            {...field}
                            value={field.value || 0} 
                            onChange={(event, newValue) => {
                                field.onChange(newValue === null ? 0 : newValue); 
                            }}
                            precision={1} 
                            sx={{ color: '#ffb400' }} 
                        />
                         {errors.rating && (
                            <Typography variant="caption" color="error" sx={{ ml: 1 }}>
                                {errors.rating.message}
                            </Typography>
                        )}
                    </Box>
                )}
            />

           
            <Button
                type="submit"
                variant="contained" 
                color="primary" 
                disabled={isSubmitting} 
                sx={{ mt: 2 }} 
            >
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </Button>
        </Box>
    );
};

export default ReviewForm;