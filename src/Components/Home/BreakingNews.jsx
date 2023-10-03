import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn text-white hover:text-black bg-[#D72050]">Latest</button>
            <Marquee pauseOnHover={true} style={ { color: 'var(--Dark-02, #403F3F)', fontSize: '18px', fontWeight: 600, lineHeight: '30px'} }>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BreakingNews;