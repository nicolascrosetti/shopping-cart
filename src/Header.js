import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <header>
      <h1>Shopping App</h1>
      <div>
        <Link to='/' className='white-link'>Home </Link>
        <Link to='/shop' className='white-link'>Shop </Link>
      </div>
    </header>
  );
}

export default Header;