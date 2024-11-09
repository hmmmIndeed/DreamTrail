import {Link} from 'react-router-dom'

const Navbar = () => {

return (
    <header>
        <div className = "container">
            <Link to ='/'>
                <h1>DreamTrail</h1>
            </Link>
            <Link to ='/stats'>
                <h1>Stats</h1>
            </Link>
        </div>
    </header>
)
}

export default Navbar