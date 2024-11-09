import {Link} from 'react-router-dom'

const Navbar = () => {

return (
    <nav>
        <header><Link to='/'><h1>DreamTrail</h1></Link></header>
        <ul>
            <li><Link to='/stats'>Stats</Link></li>
        </ul>
    </nav>
)
}

export default Navbar