import main from '../assets/images/main.jpg';
import StatsSection from '../component/Statssection';
import Asinternational from './Asinternationalbody';
import Services from './Services';
import IndustriesCatered from './IndustriesCatered';
import Location from './Location';
import '../css/body.css';

const Body = () => {
    return (
        <>
            <div className="body">
                <img src={main} alt="Main Visual" />
            </div>

            <StatsSection />
            <Asinternational />
            <Services />
            <IndustriesCatered />
            <Location />
        </>
    );
};

export default Body;
