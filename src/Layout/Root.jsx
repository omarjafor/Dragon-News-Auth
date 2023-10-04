import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto my-12">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;