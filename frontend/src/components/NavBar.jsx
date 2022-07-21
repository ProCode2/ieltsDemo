import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="h-28 flex justify-between items-center w-full top-0 left-0 px-6 z-10">
      <div>
        <Link to="/">
          <span className="text-2xl font-mono font-semibold tracking-tighter">
            EasyTodo
          </span>
        </Link>
      </div>
      <div className="hidden md:block">
        <ul className="flex justify-center items-center space-x-4 text-sm">
          <li className="transition-all duration-300 ease-in-out hover:text-slate-400">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="transition-all duration-300 ease-in-out hover:text-slate-400">
            <Link to="/login">Login</Link>
          </li>
          <li className="transition-all duration-300 ease-in-out hover:text-slate-400">
            <Link to="/register">Register</Link>
          </li>
          <li className="transition-all duration-300 ease-in-out hover:text-slate-400">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="relative block md:hidden group">
        <div>
          <GiHamburgerMenu size={30} />
        </div>
        <ul className="hidden group-hover:block absolute bg-white rounded-md shadow-md text-slate-700 overflow-hidden -bottom-30 -left-24 m-0">
          <Link to="/profile">
            <li className="py-3 pl-2 w-32 hover:bg-slate-700 hover:text-slate-100 transition-all duration-300 ease-in-out">
              Profile
            </li>
          </Link>
          <Link to="/login">
            <li className="py-3 pl-2 w-32 hover:bg-slate-700 hover:text-slate-100 transition-all duration-300 ease-in-out">
              Login
            </li>
          </Link>
          <Link to="/register">
            <li className="py-3 pl-2 w-32 hover:bg-slate-700 hover:text-slate-100 transition-all duration-300 ease-in-out">
              Register
            </li>
          </Link>

          <Link to="/dashboard">
            <li className="py-3 pl-2 w-32 hover:bg-slate-700 hover:text-slate-100 transition-all duration-300 ease-in-out">
              Dashboard
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
