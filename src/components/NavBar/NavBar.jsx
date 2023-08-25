import { Link } from "react-router-dom"
import * as usersService from '../../utilities/users-service'

export default function NavBar( {user, setUser} ) {

    function handleLogOut() {
        usersService.logOut();
        setUser(null);
    }

    return ( 
        <nav>
            <Link to="/orders">Orders</Link> |
            | <Link to="/orders/new">New Order</Link> |
            | Welcome {user.name} |
            | <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
        )
}