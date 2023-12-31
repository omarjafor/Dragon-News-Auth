import logo from '../../../images/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='mt-3'>Journalism Without Fear or Favour</p>
            <p className="text-xl"> {moment().format("dddd, MMMM Do YYYY")} </p>
        </div>
    );
};

export default Header;