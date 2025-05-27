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

export type UserFormProps = {
    editUserData?: UserInfo | null,
    saveHandler: (data: UpdatedUserData) => void
}

export interface SingleReviewProps {
    review: {
        _id: string;
        title: string;
        comment: string;
        rating: number;
        user: {
            name: string;
            image: string;
        };
        createdAt: string;
    };
}

export type ReviewFormValues = z.infer<typeof reviewFormSchema>;

export interface ReviewFormProps {
    onSubmit: (data: ReviewFormValues) => void;
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

export type UpdatedUserData = Partial<UserInfo> & { _id: string }



export interface AuthContextType {
    user: User | null;
    loading: boolean;
    loginUser: (token: string) => void;
    logoutUser: () => void;
    updateUser: (changedData: Partial<User>) => void;
}


    
