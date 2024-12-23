import "./gallery.css";
import React from "react";

const Gallery = () => {
    const moveNext = () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    };

    const movePrev = () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
    };

    return (
        <div className="gallery">
          

          <div className="gallery-container">
            <div className="slide">
                <div className="item" style={{ backgroundImage: "url(https://www.azureazure.com/wp-content/uploads/2014/01/Luxury-Collection-President-Wilson-4-2.jpg)" }}>
                    <div className="content">
                        <div className="name">Rooms</div>
                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                        <button   > <a href="./roompic">See More </a> </button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: "url(https://www.jdesigngroup.com/wp-content/uploads/2013/12/bigstock-Luxury-Restaurant-In-European-52461799-1.jpg)" }}>
                    <div className="content">
                        <div className="name">Restaurent</div>
                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                        <button>See More</button>
                    </div>
                </div>
                {/* Add remaining items */}
            </div>
            <div className="button">
                <button className="prev" onClick={movePrev}>prev<i className="fa-solid fa-arrow-left"></i></button>
                <button className="next" onClick={moveNext}>next<i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>

        


        </div>
    );
};

export default Gallery;
