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
    albums?: CarAlbum[],
    reviews: Review[]
}

export interface Review {
    _id: string;
    title: string;
    comment: string; 
    body: string;
    rating: number;
    user: {
        name: string;
        image: string;
    };
    createdAt: string;
    car: string;
}

export interface CarAlbum {
    _id: string,
    carBrand: string,
    carModel: string,
    carManufactureDate: string,
    firstImage: string,
    secondImage: string,
    thirdImage: string
}

export type User = {
    _id?: string,
    image: string,
    name: string,
    surname: string,
    phone: string,
    address: {
            street: string,
            flatNumber: string,
            city: string,
            country: string
        },
    email: string,
    password?: string,
    role?: string,
    exp?: number,
    iat?: number
}



export interface SingleReviewProps {
    review: Review
}

export type ReviewFormValues = {
    title: string;
    body: string;
    comment: string;
    rating: number;
};

export interface ReviewFormProps {
    onSubmit: (data: ReviewFormValues) => void;
}

export interface ReviewsListProps {
    reviews: Review[];
    loading: boolean;
    error: string | null;
}

export interface UserInfo {
    _id?: string;
    name: string;
    surname: string;
    email: string;
    password?: string;
    image: string;
    phone: string;
    address: {
        street: string;
        flatNumber: string;
        city: string;
        country: string;
    };
}

export type NewUserData = Omit<User, '_id'>;

export type UpdatedUserData = Partial<NewUserData> & { _id: string }

export type UserFormProps = {
    editUserData?: UserInfo,
    saveHandler: (data: UpdatedUserData) => void
}



export interface AuthContextType {
    user: User | null;
    loading: boolean;
    loginUser: (token: string) => void;
    logoutUser: () => void;
    updateUser: (changedData: Partial<User>) => void;
}


    
