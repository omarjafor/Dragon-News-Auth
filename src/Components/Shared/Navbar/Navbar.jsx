import { Link } from "react-router-dom";

const Navbar = () => {

    const navLinks = <>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li className="ml-3">About</li></Link>
        <Link to='/career'><li className="ml-3">Career</li></Link>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar mr-2">
                    <div className="w-12 rounded-full">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
                    </div>
                </div>
                <Link to='/login' className="btn bg-[#403F3F] text-white px-7 hover:text-black">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;