import './style.css';
import Header from './Header';
import {Bar} from './Bar';
import {Link} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <div class='items-bar'></div>
      <div className="home-container">
        <div className='content-container'>
          <h2>This is a shopping app</h2>
          <p>This is a front end shopping app made with React.</p>
          <button><Link to='/shop' className='white-link'>Shop Now</Link></button>
        </div>
      </div>
    </div>
  );
}

export default App;
