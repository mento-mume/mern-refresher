<<<<<<< HEAD
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlicer";
=======
import { FaSignInAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
>>>>>>> 19ea61c650ea50ebf0b630361e74836b062aed1a

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
<<<<<<< HEAD
=======
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
>>>>>>> 19ea61c650ea50ebf0b630361e74836b062aed1a
    <header className="header">
      <div className="logo">
        <Link to="/">GoalSetter</Link>
      </div>
<<<<<<< HEAD
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt />
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt>Login</FaSignInAlt>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser>Register</FaUser>
              </Link>
            </li>
          </>
        )}
=======

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
>>>>>>> 19ea61c650ea50ebf0b630361e74836b062aed1a
      </ul>
    </header>
  );
}

export default Header;
