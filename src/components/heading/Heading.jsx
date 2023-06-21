import { Link } from 'react-router-dom';
import './Heading.scss';

function Heading() {
    return(
        <div className="heading">
            <div className="heading__icon"></div>
           <h1 className="heading__logo">Logo</h1>
           <Link to="/Settings"> <div className="heading__setting"></div></Link>
        </div>
    )
}

export default Heading;