import React from 'react';
import './Testimonials.css';

const row1 = [
  { text: "Fresh and convenient. Loved the quality.", author: "Rahul M." },
  { text: "Perfect for our morning breakfast preparation.", author: "Swetha S." },
  { text: "Very fresh and delivered exactly when expected.", author: "Karthik R." },
  { text: "The batter makes the softest idlis I've ever had.", author: "Priya V." },
  { text: "Fresh and convenient. Loved the quality.", author: "Rahul M." }, // Duplicated for seamless loop
  { text: "Perfect for our morning breakfast preparation.", author: "Swetha S." },
];

const row2 = [
  { text: "The chicken is perfectly clean and tastes so fresh.", author: "Vinay K." },
  { text: "Finally a reliable service without cold storage.", author: "Anusha T." },
  { text: "Highly recommend their pesara batter!", author: "Suresh P." },
  { text: "No chemical smell, genuinely fresh fish.", author: "Deepthi R." },
  { text: "The chicken is perfectly clean and tastes so fresh.", author: "Vinay K." }, // Duplicated for seamless loop
  { text: "Finally a reliable service without cold storage.", author: "Anusha T." },
];

const TestimonialCard = ({ item }) => (
  <div className="testimonial-card">
    <div className="stars">★★★★★</div>
    <p className="t-text">"{item.text}"</p>
    <p className="t-author">— {item.author}</p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <h2 className="section-title text-center" style={{marginBottom: '50px'}}>WHAT OUR CUSTOMERS SAY</h2>
      </div>

      <div className="marquee-wrapper">
        
        {/* ROW 1: Right to Left */}
        <div className="marquee row1">
          <div className="marquee-content">
            {row1.map((item, i) => <TestimonialCard key={`r1a-${i}`} item={item} />)}
          </div>
          <div className="marquee-content loop">
            {row1.map((item, i) => <TestimonialCard key={`r1b-${i}`} item={item} />)}
          </div>
        </div>

        {/* ROW 2: Left to Right */}
        <div className="marquee row2">
          <div className="marquee-content">
            {row2.map((item, i) => <TestimonialCard key={`r2a-${i}`} item={item} />)}
          </div>
          <div className="marquee-content loop">
            {row2.map((item, i) => <TestimonialCard key={`r2b-${i}`} item={item} />)}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
