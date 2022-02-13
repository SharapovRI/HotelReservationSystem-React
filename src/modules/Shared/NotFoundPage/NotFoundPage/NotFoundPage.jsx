import { NavLink } from 'react-router-dom';
import './NotFoundPage.scss';
 
const NotFoundPage = () => {
    return(
        <div className="not_found_page">
            <div className="not_found_page_container">
                <h1>Not found</h1>
                <h2>The requested page was not found</h2>
                <NavLink to={'/'}>Go to home page</NavLink>
            </div>
        </div>
    )
}

export default NotFoundPage;