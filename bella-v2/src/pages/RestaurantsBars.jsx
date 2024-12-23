import "./Suits.css";
import React from "react";

function RestaurantsBars() {
    return (
        <div className="suits-container">
          
          <div className="image-container">
                <img src="https://th.bing.com/th/id/R.eaa376edc0e01b99257a42519b1dda37?rik=S%2fyR82SMCJBipQ&pid=ImgRaw&r=0" alt="Room 1" className="room-image" />
            </div>
            <div className="roomsintro">
                <h1 className="titleHotel restaurenttitle  preT font-primary text-[45px] ">Restaurent & Bar</h1>
                <p className="description resturentdesc">Restaurant & Bar

Welcome to our vibrant restaurant and bar! Indulge your senses with an array of culinary delights and refreshing beverages in a stylish and inviting atmosphere.

Restaurant:
Savor a culinary journey at our restaurant, where our talented chefs create exquisite dishes inspired by local flavors and international cuisine. From hearty breakfasts to delectable dinners, each meal is prepared with the freshest ingredients and served with impeccable hospitality. Whether you're dining with family, friends, or colleagues, our restaurant offers a delightful experience for every palate.

Bar:
Unwind and socialize at our chic bar, the perfect setting for relaxing with your favorite drink or discovering new cocktails crafted 
</p>
            </div>
           
        </div>
    );
}

export default RestaurantsBars;
