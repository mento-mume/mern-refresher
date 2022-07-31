import { FaSignInAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    // <header className="header">
    //   <div className="logo">
    //     <Link to="/">GoalSetter</Link>
    //   </div>
    // <ul>
    //   <li>
    //     <link to="/login">
    //       <FaSignInAlt>Login</FaSignInAlt>
    //     </link>
    //   </li>
    //   <li>
    //     <link to="/register">
    //       <FaUser>Login</FaUser>
    //     </link>
    //   </li>
    // </ul>
    // </header>
    <header className="header">
      <div className="logo">
        <Link to="/">GoalSetter</Link>
      </div>

      <ul>
        <li>
          <Link to={'/login'}>
            <FaSignInAlt>Login</FaSignInAlt>
          </Link>
        </li>

        <li>
          <Link to={'/register'}>
            <FaUser>Login</FaUser>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
