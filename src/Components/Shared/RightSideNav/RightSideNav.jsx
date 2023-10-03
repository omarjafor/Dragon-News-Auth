import { BsGoogle, BsGithub, BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';

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
        </div>
    );
};

export default RightSideNav;