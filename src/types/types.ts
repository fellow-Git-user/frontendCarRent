export type Car = {
    _id: string
    image: string,
    brand: string,
    model: string
    carMakeDate: number
    engine: string
    engineDisplacement: string | number
    transmission: string
    passengerSeats: number
    price: number,
    albums?: {
        brand: string
        model: string
        firstImage: string
        secondImage: string
        thirdImage: string
    },
    reviews: string[]
}

export type User = {
    _id?: string,
    image: string,
    name: string,
    surname: string,
    phone: number,
    address: {
            street: string,
            flatNumber: string,
            city: string,
            country: string
        },
    email: string,
    password: string,
    role: string
}

export type UserFormProps = {
    editUserData: User | null,
    saveHandler: (updatedUserData: User) => void
}

export interface SingleReviewProps {
    review: 
    _id?: string;
    title: string;     
    comment: string;     
    rating: number;
    user: {
        name: string;
        image: string;
    };
    createdAt: string;
}

export type ReviewFormValues = z.infer<typeof reviewFormSchema>;

export interface ReviewFormProps {
    onSubmit: (data: ReviewFormValues) => void;
}

export interface UserInfo {
    name: string;
    surname: string;
    email: string;
    password: string;
    image: string;
    phone: string;
    address: {
        street: string;
        flatNumber: string;
        city: string;
        country: string;
    };
}


    
