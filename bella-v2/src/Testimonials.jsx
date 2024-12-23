import "./Testimonials.css";
import { useEffect } from "react";

const quotes = [
  {
    text: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
    author: "Pelican Steve",
    source: "LittleThemes",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg"
  },
  {
    text: "I don't need to compromise on my principles, because they don't have the slightest bearing on what happens to me anyway.",
    author: "Max Conversion",
    source: "LittleThemes",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample47.jpg"
  },
  {
    text: "That's the problem with nature, something's always stinging you or oozing mucous all over you. Let's go and watch TV.",
    author: "Eleanor Faint",
    source: "LittleThemes",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample17.jpg"
  }
];

const Testimonials = () => {
  useEffect(() => {
    const testimonialCards = document.querySelectorAll(".snip1139");
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            testimonialCards[index].classList.add("animate-fade-in-up");
          }, index * 200); // Adjust the delay as needed
        } else {
          testimonialCards[index].classList.remove("animate-fade-in-up");
        }
      });
    });

    testimonialCards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      testimonialCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);
  return (
    <div>
    <h1 className="ourservice preT font-primary text-[45px] ">Testimonials</h1>
        <div className="quote-container">
      
      {quotes.map((quote, index) => (
        <figure className="snip1139" key={index}>
          <blockquote>
            {quote.text}
            <div className="arrow"></div>
          </blockquote>
          <img src={quote.img} alt={`sample${index + 1}`} />
          <div className="author">
            <h5>{quote.author} <span>- {quote.source}</span></h5>
          </div>
        </figure>
      ))}
    </div>
    </div>
  
  );
};

export default Testimonials 

