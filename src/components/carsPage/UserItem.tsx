import { User } from "../../types/types"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from "react-bootstrap";
import classes from "../../cssModules/UserItem.module.css"
import { Link } from "react-router";

type UserItemProps = {
    data: User
}

const UserItem: React.FC<UserItemProps> = ({ data }) => {
        const { _id, image, name, surname, email, phone } = data


    return (

        <Col>
            <Row className="align-items-center" xs={1} sm={2} lg={1} xl={2}>
                <Col className="text-center" >
                    <Image 
                    src={image} 
                    roundedCircle 
                    className={classes.img}
                    />
                </Col>
                <Col className="ps-3">
                    <h5>{name} {surname}</h5>
                    <p className="mb-1"><strong>Email:</strong> {email}</p>
                    <p className="mb-0"><strong>Phone:</strong> {phone}</p>
                    <div className="d-flex justify-content-start">
                    <Link to={`/admin/users/${_id}`} className={classes.link}>Click me for more info</Link>
                    </div>
                    
                </Col>
            </Row>
        
        </Col>
        
        
        
    )
}

export default UserItem