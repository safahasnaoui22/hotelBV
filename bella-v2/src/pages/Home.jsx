import BookForm from "../components/BookForm";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import Presentation from "./Presentation";
import React from "react";
import RestaurantsBars from "./RestaurantsBars";
import Services from "./Services";
import SuitsandRooms from "./SuitsandRooms";
import Testimonials from "../Testimonials";
import VideoComponent from "./VideoComponent";

const Home = () => {
  return <>

  <HeroSlider/>
  <div className='container mx-auto relative'>
  <div className='bg-accent/0  lg:absolute lg:z-30 lg:-top-12'>
   
    <BookForm />
  </div>

  <div className=" bg-accent/20 "> 
  <Presentation />
  </div>
  <div className="  "> 
    <SuitsandRooms />
  </div>
 
  <div className="  mt-4 p-4  lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12"> {/* Apply margin-top to create space */}
    <RestaurantsBars />
  </div>
  <VideoComponent/>
  <div>
    <Services/>
  </div>
  <Testimonials/>
</div>

 {/* <Presentation /> */}



  </>
};

export default Home;
