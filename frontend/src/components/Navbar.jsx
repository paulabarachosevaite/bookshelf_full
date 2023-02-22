import {Link, useNavigate} from "react-router-dom";
import {reset, logout} from "../features/auth/authSlice";
import {useDispatch, useSelector} from "react-redux";
function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user} = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <header className="relative  text-slate-200  px-2 py-3 flex justify-between items-center bg-slate-900 w-screen">
      <div className="text-3xl font-bold leading-none">
        <Link to="/" className=" hover:text-amber-500">
          bookshelf
        </Link>
      </div>
      <nav>
        <ul>
          {user ? (
            <div className="flex items-center">
              <li>
                <Link
                  to="books/user"
                  className="font-semibold uppercase  p-2 mr-3 hover:text-yellow-500"
                >
                  My books
                </Link>
              </li>
              <li>
                <Link
                  to={"/add"}
                  className="font-semibold uppercase p-2 mr-3  hover:text-yellow-500"
                >
                  Add new
                </Link>
              </li>
              <li>
                <button
                  onClick={onLogout}
                  className=" font-semibold uppercase rounded-md p-2  bg-red-900   hover:bg-red-500"
                >
                  Logout
                </button>
              </li>
            </div>
          ) : (
            <div className="flex flex-row">
              <li>
                <Link
                  to="/login"
                  className="font-semibold uppercase rounded-md p-2 mr-2 bg-sky-900 hover:bg-sky-600"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="font-semibold uppercase rounded-md mr-4 p-2 hover:border-1  bg-green-900 hover:bg-green-600"
                >
                  Register
                </Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
