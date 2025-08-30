import { Link, useLocation } from 'react-router'

const Navbar = () => {
  const {pathname} = useLocation();
  return (
    <nav className="navbar">
        <Link to='/'>
            <p className="text-2xl font-bold text-gradient">Resumine</p>
        </Link>
        {
          pathname !== '/upload' &&
            <Link to='/upload'>
                <p className="primary-button w-fit">Upload Resume</p>
            </Link>
        }
    </nav>
  )
}

export default Navbar