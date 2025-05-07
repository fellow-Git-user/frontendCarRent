// import React from 'react';
// import { TextField, Button, Rating, Box, Typography } from '@mui/material';
// import { useForm, Controller } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';

// // Define the schema for the review form using Zod
// const reviewFormSchema = z.object({
//     title: z.string().min(1, { message: "Title is required" }).max(100),
//     body: z.string().min(1, { message: "Review text is required" }).max(500),
//     rating: z.number().min(1, { message: "Rating is required" }).max(5),
// });

// // Define the types for our form data
// type ReviewFormValues = z.infer<typeof reviewFormSchema>;

// // Define the props for the ReviewForm component
// interface ReviewFormProps {
//     onSubmit: (data: ReviewFormValues) => void;
// }

// const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
//     // Initialize react-hook-form
//     const {
//         control,
//         handleSubmit,
//         formState: { errors, isSubmitting },
//         reset
//     } = useForm<ReviewFormValues>({
//         resolver: zodResolver(reviewFormSchema),
//         defaultValues: {
//             title: '',
//             body: '',
//             rating: 5, // Default rating
//         },
//     });

//     // Function to handle form submission
//     const handleFormSubmit = (data: ReviewFormValues) => {
//         onSubmit(data); // Call the onSubmit prop
//         reset(); // Reset the form after submission
//     };

//     return (
//         <Box
//             component="form"
//             onSubmit={handleSubmit(handleFormSubmit)}
//             sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: 3, // Spacing between form elements
//                 width: '100%',
//                 maxWidth: '600px', // Limit form width
//                 margin: '0 auto', // Center the form
//                 padding: 3,       // Add some padding
//                 border: '1px solid #ddd', // Optional: Add a border
//                 borderRadius: '8px', // Optional: Rounded corners
//                 boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Optional: Add a subtle shadow
//                 backgroundColor: '#fff', // Optional: White background
//             }}
//         >
//             <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', color: '#333', mb: 1 }}>
//                 Write a Review
//             </Typography>

//             {/* Title Input */}
//             <Controller
//                 name="title"
//                 control={control}
//                 render={({ field }) => (
//                     <TextField
//                         {...field}
//                         label="Review Title" // More descriptive label
//                         variant="outlined" // Use outlined variant
//                         error={!!errors.title} // Show error state
//                         helperText={errors.title?.message} // Display validation message
//                         placeholder="Enter a title for your review"
//                         fullWidth // Make the input take full width of its container
//                     />
//                 )}
//             />

//             {/* Review Text Area (using TextField with multiline) */}
//             <Controller
//                 name="body"
//                 control={control}
//                 render={({ field }) => (
//                     <TextField // Using TextField for textarea functionality
//                         {...field}
//                         label="Review Text" // Label for the textarea
//                         placeholder="Write your review here..."
//                         multiline // Enable multiline mode (renders as textarea)
//                         rows={4} // Specify the initial number of rows
//                         variant="outlined" // Use outlined variant
//                         fullWidth // Make the textarea take full width
//                         error={!!errors.body} // Show error state
//                         helperText={errors.body?.message} // Display validation message
//                         // sx={{ minHeight: '100px' }} // Optional: Minimum height using sx prop
//                     />
//                 )}
//             />

//             {/* Rating Input */}
//             <Controller
//                 name="rating"
//                 control={control}
//                 render={({ field }) => (
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                         <Typography component="legend" sx={{ fontWeight: 'medium', color: '#333' }}>Rating:</Typography>
//                         <Rating
//                             {...field}
//                             value={field.value || 0} // Ensure value is a number, default to 0
//                             onChange={(event, newValue) => {
//                                 field.onChange(newValue === null ? 0 : newValue); // Update form value, handle null
//                             }}
//                             precision={1} // Allow only whole number ratings
//                             sx={{ color: '#ffb400' }} // Optional: Customize star color
//                         />
//                          {errors.rating && (
//                             <Typography variant="caption" color="error" sx={{ ml: 1 }}>
//                                 {errors.rating.message}
//                             </Typography>
//                         )}
//                     </Box>
//                 )}
//             />

//             {/* Submit Button */}
//             <Button
//                 type="submit"
//                 variant="contained" // Use contained variant for a filled button
//                 color="primary" // Use primary theme color
//                 disabled={isSubmitting} // Disable button while submitting
//                 sx={{ mt: 2 }} // Margin top
//             >
//                 {isSubmitting ? 'Submitting...' : 'Submit Review'}
//             </Button>
//         </Box>
//     );
// };

// export default ReviewForm;