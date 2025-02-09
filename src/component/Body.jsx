import main from '../assets/images/main.jpg';
import StatsSection from '../component/Statssection';
import brochure from '../assets/AS brochure.pdf'
import '../css/body.css';
import Asinternational from './Asinternationalbody';
import IndustriesCatered from './IndustriesCatered';
import Location from './Location';
import Services from './Services';



const Body = () => {
    return (
        <>
           <div className="body">
        <img src={main} alt="Main Visual" />

        <div className="download-container">
          <a href={brochure} download="AS_Brochure.pdf">
            <button className="download-button">Download Brochure</button>
          </a>
        </div>
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
