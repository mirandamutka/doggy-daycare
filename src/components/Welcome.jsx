import { Link } from 'react-router-dom';
import './Welcome.css'
const Welcome = () => {
    return (
        <div className="container">
            <h2>Welcome!</h2>
            <div className="welcomeMessage">
                At Doggy Daycare we make sure that your dog gets the best treatment and care.
            </div>
            <Link to="/doglist"><button className="doglistButton">List of Dogs</button></Link>
        </div>
    )
}

export default Welcome;