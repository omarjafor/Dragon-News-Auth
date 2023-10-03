import { BsGoogle, BsGithub, BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import qzone1 from '../../../images/qZone1.png';
import qzone2 from '../../../images/qZone2.png';
import qzone3 from '../../../images/qZone3.png';


const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-3">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <BsGoogle></BsGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <BsGithub></BsGithub>
                    Login With GitHub
                </button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-3xl mb-4">Find Us on </h2>
                <a className='p-4 flex text-lg items-center border rounded-t-lg' href="">
                    <BsFacebook></BsFacebook>
                    <span className='ml-2'>Facebook</span>
                </a>
                <a className='p-4 flex text-lg items-center border rounded-x-lg' href="">
                    <BsTwitter></BsTwitter>
                    <span className='ml-2'>Twitter</span>
                </a>
                <a className='p-4 flex text-lg items-center border rounded-b-lg' href="">
                    <BsInstagram></BsInstagram>
                    <span className='ml-2'>Instagram</span>
                </a>
            </div>
            <div className="p-4 space-y-3 mb-3 bg-[#F3F3F3]">
                <h2 className="text-3xl">Q-Zone</h2>
               <img src={qzone1} alt="" />
               <img src={qzone2} alt="" />
               <img src={qzone3} alt="" />
            </div>
            <div className="p-10 mt-5 text-center space-y-3 mb-3 bg-[url('./images/bg.png')]">
                <h2 className="text-3xl font-bold leading-10 text-white mt-6">Create an Amazing Newspaper</h2>
                <p className='text-white'>
                    Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                </p>
                <button className='px-5 py-4 text-white bg-[#D72050]'>Learn More</button>
            </div>
        </div>
    );
};

export default RightSideNav;