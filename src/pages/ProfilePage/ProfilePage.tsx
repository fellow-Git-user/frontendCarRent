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

    const [ name, setName ] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState(user.password)
    const [surname, setSurname ] = useState(user.surname)
    const [image, setImage ] = useState(user.image)
    const [phone, setPhone ] = useState(user.phone)
    const [street, setStreet ] = useState(user.street)
    const [flatNumber, setFlatNumber ] = useState(user.flatNumber)
    const [city, setCity ] = useState(user.city)
    const [country, setCountry ] = useState(user.country)


    useEffect(() => {
        if (user && user.exp * 1000 < Date.now()) {
            logoutUser();
        }
        }, [user, logoutUser]);
    
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
                    <label htmlFor="text" name="name" id="name" value={name}>Name: </label>
                    <input type="text" name="name" id="name" value={name} onChange={nameHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="text" name="surname" id="surname" value={surname}>Surname: </label>
                    <input type="text" name="surname" id="surname" value={surname} onChange={surnameHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="text" name="phone" id="phone" value={phone}>Phone: </label>
                    <input type="text" name="phone" id="phone" value={phone} onChange={phoneHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="text" name="image" id="image" value={image}>Image: </label>
                    <input type="text" name="image" id="image" value={image} onChange={imageHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="text" name="street" id="street" value={street}>Street: </label>
                    <input type="text" name="street" id="street" value={street} onChange={streetHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="text" name="flatNumber" id="flatNumber" value={flatNumber}>Flat Number: </label>
                    <input type="text" name="flatNumber" id="flatNumber" value={flatNumber} onChange={flatNumberHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="text" name="city" id="city" value={city}>City: </label>
                    <input type="text" name="city" id="city" value={city} onChange={cityHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="text" name="country" id="country" value={country}>Country: </label>
                    <input type="text" name="country" id="country" value={country} onChange={countryHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="email" name="email" id="email" value={email}>Email: </label>
                    <input type="email" name="email" id="email" value={email} onChange={emailHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="password" name="password" id="password" value={password}>Password: </label>
                    <input type="password" name="password" id="password" value={password} onChange={passwordHandler} />
                </div>

                <Button variant="contained" endIcon={<SendIcon />} type="submit">Update profile</Button>

            </Form>
            
        </div>
        
    )
}

export default ProfilePage