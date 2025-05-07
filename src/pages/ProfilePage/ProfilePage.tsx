import { Navigate } from "react-router"
import { useAuth } from "../../AuthContext"
import { Commet } from "react-loading-indicators"
import { useEffect, useState } from "react"
import { Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { Form } from "react-bootstrap"
import apiUser from "../../utils/apiUser"


const ProfilePage: React.FC = () => {
    const { user, loading, logoutUser, updateUser} = useAuth()

    const [ name, setName ] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [surname, setSurname ] = useState('')
    const [image, setImage ] = useState('')
    const [phone, setPhone ] = useState('')
    const [street, setStreet ] = useState('')
    const [flatNumber, setFlatNumber ] = useState('')
    const [city, setCity ] = useState('')
    const [country, setCountry ] = useState('')

   


    useEffect(() => {
        if (user) {
            setName(user.name)
            setEmail(user.email)
            setPassword(user.password)
            setSurname(user.surname)
            setImage(user.image)
            setPhone(user.phone)
            setStreet(user.street)
            setFlatNumber(user.flatNumber)
            setCity(user.city)
            setCountry(user.country)
        }
    }, [user])


    
        if(loading) {
        return <Commet color="#5d5d5d" size="medium" text="" textColor="" />
        }
    
        if(!user) {
        return <Navigate to={'/home/login'}/>
        }

        const nameHandler = event => {
            setName(event.target.value)
        }
        const surnameHandler = event => setSurname(event?.target.value)
        const imageHandler = event => setImage(event?.target.value)
        const phoneHandler = event => setPhone(event?.target.value)
        const streetHandler = event => setStreet(event?.target.value)
        const flatNumberHandler = event => setFlatNumber(event?.target.value)
        const cityHandler = event => setCity(event?.target.value)
        const countryHandler = event => setCountry(event?.target.value)
        const emailHandler = event => setEmail(event?.target.value)
        const passwordHandler = event => setPassword(event?.target.value)


        const submitHandler = async () => {
            event?.preventDefault()
            
            try { 
                const { data } = await apiUser.put('/users/update', { 
                    name,
                    email,
                    password,
                    surname,
                    image,
                    phone,
                    street,
                    flatNumber,
                    city,
                    country
                 })
                const { user } = data

                updateUser(user)
            }
            catch (error) {
                console.log(error)
            }
        }

    return (
        <div>
            <div>Profile page</div>
            <p>Hello, {user.name} </p>


            <Form onSubmit={submitHandler}>

            <div className="form-control">
                    <label htmlFor="name" >Name: </label>
                    <input type="text" name="name" id="name" value={name} onChange={nameHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="surname" >Surname: </label>
                    <input type="text" name="surname" id="surname" value={surname} onChange={surnameHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="phone" >Phone: </label>
                    <input type="text" name="phone" id="phone" value={phone} onChange={phoneHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="image">Image: </label>
                    <input type="text" name="image" id="image" value={image} onChange={imageHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="street">Street: </label>
                    <input type="text" name="street" id="street" value={street} onChange={streetHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="flatNumber">Flat Number: </label>
                    <input type="text" name="flatNumber" id="flatNumber" value={flatNumber} onChange={flatNumberHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="city" >City: </label>
                    <input type="text" name="city" id="city" value={city} onChange={cityHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="country">Country: </label>
                    <input type="text" name="country" id="country" value={country} onChange={countryHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" value={email} onChange={emailHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" value={password} onChange={passwordHandler} />
                </div>

                <Button variant="contained" endIcon={<SendIcon />} type="submit">Update profile</Button>

            </Form>
            
        </div>
        
    )
}

export default ProfilePage