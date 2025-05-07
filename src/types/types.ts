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
    id?: string,
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
    review: {
        _id: string;
        user: { name: string };
        comment: string;
        rating: number;
        createdAt: string;
    };
}

    
