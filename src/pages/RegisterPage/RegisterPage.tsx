import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import { useAuth } from "../../AuthContext"

const RegisterPage: React.FC = () => {
    const { loginUser } = useAuth()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [surname, setSurname ] = useState('')
    const [image, setImage ] = useState('')
    const [phone, setPhone ] = useState('')
    const [street, setStreet ] = useState('')
    const [flatNumber, setFlatNumber ] = useState('')
    const [city, setCity ] = useState('')
    const [country, setCountry ] = useState('')

    const navigate = useNavigate()

    const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => setName(event?.target.value)
    const surnameHandler = (event: React.ChangeEvent<HTMLInputElement>) => setSurname(event?.target.value)
    const imageHandler = (event: React.ChangeEvent<HTMLInputElement>) => setImage(event?.target.value)
    const phoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => setPhone(event?.target.value)
    const streetHandler = (event: React.ChangeEvent<HTMLInputElement>) => setStreet(event?.target.value)
    const flatNumberHandler = (event: React.ChangeEvent<HTMLInputElement>) => setFlatNumber(event?.target.value)
    const cityHandler = (event: React.ChangeEvent<HTMLInputElement>) => setCity(event?.target.value)
    const countryHandler = (event: React.ChangeEvent<HTMLInputElement>) => setCountry(event?.target.value)


    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event?.target.value)
    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event?.target.value)

    const registerHandler = async (event: React.FormEvent)  => {
        event.preventDefault()
        
        try {
            const userInfo = {
                name,
                email,
                password,
                surname,

                image,
                phone,
                address: {
                    street,
                    flatNumber,
                    city,
                    country
                }
            }
            const res = await axios.post('http://localhost:3005/api/users/register', userInfo)
            

            loginUser(token)            
            navigate('/home/profile')
        } catch (error) {

            console.log('Failed to register', error)
        }

    }

    return (
        <div>
            <h1>Register Page</h1>

            <form onSubmit={registerHandler}>
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
                    <label htmlFor="text" name="flatNumber" id="flatNumber" value={flatNumber}>Flat or house Number: </label>
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

                <button type="submit">Register</button>
            </form>
        </div>
    )

}

export default RegisterPage