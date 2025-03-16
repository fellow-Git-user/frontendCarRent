import { Alert, Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react"
import { createUser } from "../../api/carsAPI";
import { useNavigate } from "react-router";
import { UserFormProps } from "../../types/types";
import { useSingleUser } from "../../pages/SingleUser/SingleUserContextProvider";





const CreateUserForm: React.FC<UserFormProps> = ( {editUserData} ) => {

    const { editUser } = useSingleUser()
    

    const [image, setImage] = useState(editUserData?.image ?? '')     
    const [name, setName] = useState(editUserData?.name ?? '')
    const [surname, setSurname] = useState(editUserData?.surname ?? '')
    const [phone, setPhone] = useState(editUserData?.phone ?? '')
    const [street, setStreet] = useState(editUserData?.address.street ?? '')
    const [flatNumber, setFlatNumber] = useState(editUserData?.address.flatNumber ?? '')
    const [city, setCity] = useState(editUserData?.address.city ?? '')
    const [country, setCountry] = useState(editUserData?.address.country ?? '')
    const [email, setEmail] = useState(editUserData?.email ?? '')
    const [error, setError] = useState('')

    let navigate = useNavigate()

   const imageHandler = (event: React.ChangeEvent<HTMLInputElement>) => setImage(event.target.value)
   const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)
   const surnameHandler = (event: React.ChangeEvent<HTMLInputElement>) => setSurname(event.target.value)
   const phoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)
   const streetHandler = (event: React.ChangeEvent<HTMLInputElement>) => setStreet(event.target.value)
   const flatNumberHandler = (event: React.ChangeEvent<HTMLInputElement>) => setFlatNumber(event.target.value)
   const cityHandler = (event: React.ChangeEvent<HTMLInputElement>) => setCity(event.target.value)
   const countryHandler = (event: React.ChangeEvent<HTMLInputElement>) => setCountry(event.target.value)
   const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)

  

   const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!name || !surname || !phone || !email){
        setError('Please note that name, surname, phone and email fields must be filled in order to create an account')
        return 
    }
    
    const newUser = {
        image,
        name,
        surname,
        phone: Number(phone),
        address: {
            street,
            flatNumber,
            city,
            country,
        },
        email,
    }

    if(editUserData) {
        const updatedUserData = {...newUser, id: editUserData.id}
        editUser(updatedUserData)
        navigate(`/rent/users/${updatedUserData.id}`)

    } else {
        try {
            const createdUser = await createUser(newUser)
            console.log(createdUser)
            
            setError('')
            setImage('')
            setName('')
            setSurname('')
            setPhone('')
            setStreet('')
            setFlatNumber('')
            setCity('')
            setCountry('')
            setEmail('')
            setError('')
    
            navigate(`/rent/users/${createdUser.id}`)
        
        } catch (err) {
            setError('Failed to create user.')
            console.error(err)
        }

    }

    
    

   }

    return(
        <form onSubmit={submitHandler}>

        <div className="form-control">
            <label htmlFor="image">Image</label>
            <input type="text" name="image" id="image" value={image} onChange={imageHandler} />
        </div>
        <div className="form-control">
            <label htmlFor="name">name</label>
            <input type="text" name="name" id="name" value={name} onChange={nameHandler} />
        </div>
        <div className="form-control">
            <label htmlFor="surname">surname</label>
            <input type="text" name="surname" id="surname" value={surname} onChange={surnameHandler} />
        </div>
        <div className="form-control">
            <label htmlFor="phone">phone</label>
            <input type="text" name="phone" id="phone" value={phone} onChange={phoneHandler} />
        </div>
        <div className="form-control">
            <label htmlFor="street">street</label>
            <input type="text" name="street" id="street" value={street} onChange={streetHandler} />
        </div>
        <div className="form-control">
            <label htmlFor="flatNumber">Flat Number</label>
            <input type="text" name="flatNumber" id="flatNumber" value={flatNumber} onChange={flatNumberHandler} />
        </div>
        <div className="form-control">
            <label htmlFor="city">city</label>
            <input type="text" name="city" id="city" value={city} onChange={cityHandler} />
        </div>
        <div className="form-control">
            <label htmlFor="country">country</label>
            <input type="text" name="country" id="country" value={country} onChange={countryHandler} />
        </div>
        <div className="form-control">
            <label htmlFor="email">email</label>
            <input type="text" name="email" id="email" value={email} onChange={emailHandler} />
        </div>

        {error && <Alert severity="error">{error}</Alert>}

        <Button variant="contained" endIcon={<SendIcon />} type="submit">{editUserData? 'Save changes' : 'Create'}</Button>
        </form>
    )
}

export default CreateUserForm

    