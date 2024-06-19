import { Link, NavLink } from "react-router-dom";
import 'animate.css';
import './Animation.css'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log("user logged Out Successfully"))
            .catch(error => console.log(error))
    }
    const navLinks = <>
        <li className="hover:text-[#c19d68]"><NavLink to='/'>Home</NavLink></li>
        <li className="hover:text-[#c19d68]"><NavLink to='/about'>About Us</NavLink></li>
        <li className="hover:text-[#c19d68]"><NavLink to='/update'>Update Profile</NavLink></li>
        {
            user && <li className="hover:text-[#c19d68]"><NavLink to='/user'>User Profile</NavLink></li>
        }
    </>
    return (
        <div className="navbar bg-black text-white border-b-2 border-[#c19d68] p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div  tabIndex={0} role="button" className="btn btn-ghost lg:hidden z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-black rounded-box w-52 text-white ">
                        {navLinks}
                    </ul>
                </div>
                <a className=" font-extrabold text:xs md:text-4xl text-[#c19d68] animate__animated animate__fadeInUp" >CozyNest</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1  text-white">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">


                {
                    user ?
                        <div className="user-info flex justify-center items-center gap-4">
                            <div    className="lg:tooltip"  data-tip={user.displayName}>
                            <div className="avatar">
                                <div className="md:w-10 w-5 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            </div>
                            
                            <a onClick={handleLogOut} className="btn bg-[#c19d68] border-none text-white">Logout</a>
                        </div> :
                        <Link to='/login'><a className="btn bg-[#c19d68] border-none text-white">Login</a>
                        </Link>





                }
            </div>

        </div>
    );
};

export default Navbar;