// 2 - links com react router
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      {/* <Link to='/'>Home</Link>
      <Link to='/about'>About</Link> */}

      <NavLink to='/' >Home</NavLink>
      <NavLink to='/about' >Sobre</NavLink>
      {/* <NavLink to='/' className={({isActive}) => (isActive ? "está-ativo" : "não-ativo")}>Home</NavLink>
      <NavLink to='/about' className={({isActive}) => (isActive ? "está-ativo" : "não-ativo")}>Sobre</NavLink> */}
    </nav>
  )
}

export default Navbar;
