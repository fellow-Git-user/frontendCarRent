import { Alert, Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react"
import { createUser } from "../../api/carsAPI";
import { useNavigate } from "react-router";



const CreateUserForm: React.FC = () => {

    const [image, setImage] = useState('')     
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [street, setStreet] = useState('')
    const [flatNumber, setFlatNumber] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    let navigate = useNavigate()

   const imageHandler = event => setImage(event.target.value)
   const nameHandler = event => setName(event.target.value)
   const surnameHandler = event => setSurname(event.target.value)
   const phoneHandler = event => setPhone(event.target.value)
   const streetHandler = event => setStreet(event.target.value)
   const flatNumberHandler = event => setFlatNumber(event.target.value)
   const cityHandler = event => setCity(event.target.value)
   const countryHandler = event => setCountry(event.target.value)
   const emailHandler = event => setEmail(event.target.value)

  

   const submitHandler = async event => {
    event.preventDefault()

    if (!name || !surname || !phone || !email){
        setError('Please note that name, surname, phone and email fields must be filled in order to create an account')
        return 
       }
    
    const newUser = {
        image,
        name,
        surname,
        phone,
        address: {
            street,
            flatNumber,
            city,
            country,
        },
        email,
    }

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

        <Button variant="contained" endIcon={<SendIcon />} type="submit">Create</Button>
        </form>
    )
}

export default CreateUserForm

    