import { useState } from "react"
import { Form } from "react-bootstrap"
import apiUser from "../../utils/apiUser"

const CreateAlbumForm: React.FC = () => {

       const [ carBrand, setCarBrand ] = useState('')
       const [ carModel, setCarModel ] = useState('')
       const [ carManufactureDate, setCarManufactureDate ] = useState('')
       const [ firstImage, setFirstImage ] = useState('')
       const [ secondImage, setSecondImage ] = useState('')
       const [ thirdImage, setThirdImage ] = useState('')
       const [createdAlbumId, setCreatedAlbumId] = useState<string | null>(null); // New state for the ID


       

   
   
       const carBrandHandler = (event: React.ChangeEvent<HTMLInputElement>) => setCarBrand(event?.target.value)
       const carModelHandler = (event: React.ChangeEvent<HTMLInputElement>) => setCarModel(event?.target.value)
       const carManufactureDateHandler = (event: React.ChangeEvent<HTMLInputElement>) => setCarManufactureDate(event?.target.value)
       const firstImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => setFirstImage(event?.target.value)
       const secondImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => setSecondImage(event?.target.value)
       const thirdImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => setThirdImage(event?.target.value)
     
   
       const createCarHandler = async (event: React.FormEvent)  => {
           event.preventDefault()
           try {
               const AlbumCarData = {
                carBrand,
                carModel,
                carManufactureDate,
                firstImage,
                secondImage,
                thirdImage
   
               }
               
               
               const res = await apiUser.post('/albums/create', AlbumCarData)
               
               if (res.data && res.data._id) {
                setCreatedAlbumId(res.data._id);
                console.log('Album created with ID:', res.data._id);
            } else {
                console.error('Album creation successful, but ID not found in response');
                setCreatedAlbumId("ID not found");
            }
       
           } catch (error: any) {
               console.log('Failed to create album', error.message)
               setCreatedAlbumId("Error")
           }
   
       }
       
       return (
           <div>
               <p>Create album</p>
               <Form onSubmit={createCarHandler}>
               
                   <div className="form-control">
                       <label htmlFor="text" name="carBrand" id="carBrand" value={carBrand}>Brand: </label>
                       <input type="text" name="carBrand" id="carBrand" value={carBrand} onChange={carBrandHandler} />
                   </div>
                   <div className="form-control">
                       <label htmlFor="text" name="carModel" id="carModel" value={carModel}>Model: </label>
                       <input type="text" name="carModel" id="carModel" value={carModel} onChange={carModelHandler} />
                   </div>
                   <div className="form-control">
                       <label htmlFor="number" name="carManufactureDate" id="carManufactureDate" value={carManufactureDate}>Car manufacture date: </label>
                       <input type="number" name="carManufactureDate" id="carManufactureDate" value={carManufactureDate} onChange={carManufactureDateHandler} />
                   </div>
                   <div className="form-control">
                       <label htmlFor="text" name="firstImage" id="firstImage" value={firstImage}>First image: </label>
                       <input type="text" name="firstImage" id="firstImage" value={firstImage} onChange={firstImageHandler} />
                   </div>
                   <div className="form-control">
                       <label htmlFor="text" name="secondImage" id="secondImage" value={secondImage}>Second image: </label>
                       <input type="text" name="secondImage" id="secondImage" value={secondImage} onChange={secondImageHandler} />
                   </div>
                   <div className="form-control">
                       <label htmlFor="text" name="thirdImage" id="thirdImage" value={thirdImage}>Third image: </label>
                       <input type="text" name="thirdImage" id="thirdImage" value={thirdImage} onChange={thirdImageHandler} />
                   </div>
                      
                   <button type="submit">Create</button>
               </Form>

               {createdAlbumId && ( 
                <div>
                    <p>Created Album ID: {createdAlbumId}</p>
                </div>
            )}

           </div>
           
       )
   }

export default CreateAlbumForm