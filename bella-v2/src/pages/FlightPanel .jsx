import "./fligh.css";
import React from "react";

const FlightPanel = ({ title, bgImage, outPrice, rtnPrice, linkUrl }) => {
  return (
    <div className="panelflight">
      <div className="ringflight">
        <div className={`cardflight ${bgImage}`}></div>
        <div className="borderflight">
          <p className="titleflight">{title}</p>
          <div className="slideflight">
            <h6 className="paraflight">Latest Deals from Heathrow</h6>
            <div className="lineflight">
              <button className="paraflight">
                <a href={linkUrl}>See More</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FlightDeals = () => {
  return (
    <div className="mainflight">
      <h1 className=" flightca titleHotel   font-primary text-[45px] ">Rooms & Suits</h1>
                <p className="description flightdes">Rooms & Suits

Welcome to our vibrant restaurant and bar! Indulge your senses with an array of culinary delights and refreshing beverages in a stylish and inviting atmosphere.

Restaurant:
Savor a culinary journey at our restaurant, where our talented chefs create exquisite dishes inspired by local flavors and international cuisine. From hearty breakfasts to delectable dinners, each meal is prepared with the freshest ingredients and served with impeccable hospitality. Whether you're dining with family, friends, or colleagues, our restaurant offers a delightful experience for every palate.

Bar:
Unwind and socialize at our chic bar, the perfect setting for relaxing with your favorite drink or discovering new cocktails crafted 
</p>
       <div className="containerflight">
      
    
      <FlightPanel title="Rooms" bgImage="card1flight" outPrice="849" rtnPrice="659" linkUrl="/exmple" />
    
    <FlightPanel title="Suites" bgImage="card2flight" outPrice="999" rtnPrice="745" linkUrl="/suites" />
    <FlightPanel title="Villas" bgImage="card3flight" outPrice="399" rtnPrice="257" linkUrl="/villas" />
  </div>
    </div>
   
  );
};

export default FlightDeals;
