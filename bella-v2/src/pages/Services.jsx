import "./Services.css";
import React, { useEffect } from "react";

// Services.jsx

function Services() {
  useEffect(() => {
    const serviceCards = document.querySelectorAll(".service");
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            serviceCards[index].classList.add("animate-left-to-right");
          }, index * 200); // Adjust the delay as needed
        } else {
          serviceCards[index].classList.remove("animate-left-to-right");
        }
      });
    });

    serviceCards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      serviceCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);
  return (
    <div>
        <h1 className="ourservice preT font-primary text-[45px] ">Our services</h1>
  <div className="services-container">
 
   


      <div className="service ">
        <h2 className="title font-primary">Un Tout Pour Vous Plaire</h2>
        <div className="image-container">
          <img src="https://cache.marriott.com/marriottassets/marriott/LAXBW/laxbw-prime-1715-hor-clsc.jpg" alt="Service Image 1" className="service-image" />
        </div>
        <p className="description">
          Une sérénité et une douceur que vous ne trouverez nulle part ailleurs
        </p>
      </div>

      <div className="top">
    <div className="service ">
        <h2 className="title font-primary">Un Tout Pour Vous Plaire</h2>
        <div className="image-container">
          <img src="https://cache.marriott.com/marriottassets/marriott/LAXBW/laxbw-prime-1715-hor-clsc.jpg" alt="Service Image 1" className="service-image" />
        </div>
        <p className="description">
          Une sérénité et une douceur que vous ne trouverez nulle part ailleurs
        </p>
      </div>
    </div>
      <div className="service ">
        <h2 className="title font-primary">Thalasso & SPA</h2>
        <p className="description">
        est l’un des plus luxueux établissements dans la région de Tabarka.
        </p>
        <div className="image-container">
          <img src="https://cache.marriott.com/marriottassets/marriott/LAXBW/laxbw-prime-1715-hor-clsc.jpg" alt="Service Image 1" className="service-image" />
        </div>
      </div>
      <div className="top">
    <div className="service ">
        <h2 className="title font-primary">Un Tout Pour Vous Plaire</h2>
        <div className="image-container">
          <img src="https://cache.marriott.com/marriottassets/marriott/LAXBW/laxbw-prime-1715-hor-clsc.jpg" alt="Service Image 1" className="service-image" />
        </div>
        <p className="description">
          Une sérénité et une douceur que vous ne trouverez nulle part ailleurs
        </p>
      </div>
    </div>
    </div>
    </div>
  
  );
}

export default Services;
