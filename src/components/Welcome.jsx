import { Link } from 'react-router-dom';
const Welcome = () => {
    return (
        <div>
            <h2>Welcome!</h2>
            <Link to="/doglist"><button>Dogs</button></Link>
        </div>
    )
}

export default Welcome;