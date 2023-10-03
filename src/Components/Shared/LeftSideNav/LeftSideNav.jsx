import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {

    const [category, setCategory] = useState([]);

    useEffect( () => {
        fetch('./categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    } , [])
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold"> All Categories </h1>
            {
                category.map(cate => <Link 
                    className="block ml-4 text-xl font-semibold"
                    key={cate.id}
                    to={`/category/${cate.id}`}
                    > {cate.name} </Link>)
            }
        </div>
    );
};

export default LeftSideNav;