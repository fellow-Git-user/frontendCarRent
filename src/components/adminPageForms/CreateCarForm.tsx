import { useState } from "react"
import { Form } from "react-bootstrap"
import apiUser from "../../utils/apiUser"

const CreateCarForm: React.FC = () => {

    const [ image, setImage ] = useState('')
    const [ brand, setBrand ] = useState('')
    const [ model, setModel ] = useState('')
    const [ carMakeDate, setCarMakeDate ] = useState('')
    const [ engine, setEngine ] = useState('')
    const [ engineDisplacement, setEngineDisplacement ] = useState('')
    const [ transmission, setTransmission ] = useState('')
    const [ passengerSeats, setPassengerSeats ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ albums, setAlbums ] = useState<string[]>([])
    const [albumsInput, setAlbumsInput] = useState('')
    const [message, setMessage] = useState<string | null>(null); // Add state for message



    const imageHandler = (event: React.ChangeEvent<HTMLInputElement>) => setImage(event?.target.value)
    const brandHandler = (event: React.ChangeEvent<HTMLInputElement>) => setBrand(event?.target.value)
    const modelHandler = (event: React.ChangeEvent<HTMLInputElement>) => setModel(event?.target.value)
    const carMakeDateHandler = (event: React.ChangeEvent<HTMLInputElement>) => setCarMakeDate(event?.target.value)
    const engineHandler = (event: React.ChangeEvent<HTMLInputElement>) => setEngine(event?.target.value)
    const engineDisplacementHandler = (event: React.ChangeEvent<HTMLInputElement>) => setEngineDisplacement(event?.target.value)
    const transmissionHandler = (event: React.ChangeEvent<HTMLInputElement>) => setTransmission(event?.target.value)
    const passengerSeatsHandler = (event: React.ChangeEvent<HTMLInputElement>) => setPassengerSeats(event?.target.value)
    const priceHandler = (event: React.ChangeEvent<HTMLInputElement>) => setPrice(event?.target.value)
    const albumsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAlbumsInput(event.target.value)
        const albumsArray = event.target.value.split(',').map(item => item.trim());
        setAlbums(albumsArray);
    } 

    const createCarHandler = async (event: React.FormEvent)  => {
        event.preventDefault()
        setMessage('Submitting...');

        try {
            const carData = {
                brand,
                image,
                model,
                carMakeDate,
                engine,
                engineDisplacement,
                transmission,
                passengerSeats,
                price,
                albums
            };

            const res = await apiUser.post('/cars/create', carData);
            if(res.status >= 200 && res.status < 300){
                setMessage('Car created successfully!');
                setImage('');
                setBrand('');
                setModel('');
                setCarMakeDate('');
                setEngine('');
                setEngineDisplacement('');
                setTransmission('');
                setPassengerSeats('');
                setPrice('');
                setAlbums([]);
                setAlbumsInput('');
            }
            else{
                setMessage('Failed to create car');
            }


        } catch (error: any) {
            setMessage(error.response?.data?.message || 'An unexpected error occurred.'); // Set error message
            console.error('Failed to register', error);
        }

    }
    
    
    
    
    
    return (
        <div>
            <p>Create car</p>
            {message && <p>{message}</p>}
            <Form onSubmit={createCarHandler}>
            
                <div className="form-control">
                    <label htmlFor="image" >Image: </label>
                    <input type="text" name="image" id="image" value={image} onChange={imageHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="brand" >Brand: </label>
                    <input type="text" name="brand" id="brand" value={brand} onChange={brandHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="model" >Model: </label>
                    <input type="text" name="model" id="model" value={model} onChange={modelHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="carMakeDate"  >Car manufacture date: </label>
                    <input type="number" name="carMakeDate" id="carMakeDate" value={carMakeDate} onChange={carMakeDateHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="engine" >Engine: </label>
                    <input type="text" name="engine" id="engine" value={engine} onChange={engineHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="engineDisplacement" >Engine displacement: </label>
                    <input type="number" name="engineDisplacement" id="engineDisplacement" value={engineDisplacement} onChange={engineDisplacementHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="transmission" >Transmission: </label>
                    <input type="text" name="transmission" id="transmission" value={transmission} onChange={transmissionHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="passengerSeats" >Number of passenger seats: </label>
                    <input type="number" name="passengerSeats" id="passengerSeats" value={passengerSeats} onChange={passengerSeatsHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="price"  >Price: </label>
                    <input type="number" name="price" id="price" value={price} onChange={priceHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="albums" >Albums: </label>
                    <input type="text" name="albums" id="albums" value={albumsInput} onChange={albumsHandler} />
                </div>

                <button type="submit">Create</button>
            </Form>
        </div>
        
    )
}

export default CreateCarForm