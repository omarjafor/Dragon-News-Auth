import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn text-white hover:text-black bg-[#D72050]">Latest</button>
            <Marquee pauseOnHover={true} style={ { color: 'var(--Dark-02, #403F3F)', fontSize: '18px', fontWeight: 600, lineHeight: '30px'} }>
                <Link to='/'> I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;