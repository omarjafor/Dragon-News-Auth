import { useEffect, useState } from "react";


const LeftSideNav = () => {

    const [category, setCategory] = useState([]);

    useEffect( () => {
        fetch('./categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    } , [])
    return (
        <div>
            <h1 className="text-3xl font-bold">
                All Category : {category.length}
            </h1>
        </div>
    );
};

export default LeftSideNav;