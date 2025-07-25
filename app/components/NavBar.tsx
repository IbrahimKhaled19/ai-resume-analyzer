import { Link } from "react-router"

const NavBar = () => {
  return (
    <nav className="navbar"><Link to="/">
        <p className="text-2xl text-gradient font-bold">RESUMAID</p>
        </Link>
        <Link to="/upload">
        <p className="primary-button w-fit">Upload Resume</p>
        </Link>
    </nav>
  )
}

export default NavBar