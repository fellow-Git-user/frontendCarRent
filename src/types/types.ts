export type Car = {
    id: string
    image: string,
    brand: string,
    model: string
    carMakeDate: number
    engine: string
    engineDisplacement: string | number
    transmission: string
    passengerSeats: number
    price: number
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

    
