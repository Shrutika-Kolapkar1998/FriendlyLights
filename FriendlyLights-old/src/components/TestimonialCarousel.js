import React, { useEffect, useState } from "react";
import { GrPrevious , GrNext } from "react-icons/gr";
const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=9")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error("Error fetching testimonials:", err));
  }, []);

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const slides = chunkArray(testimonials, 3);

  return (
    <section id="testimonial" className="container-fluid p-8">
      <h2 className="text-3xl font-bold text-center">What Our Customers Say!</h2>

      <div
        id="testimonialCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner py-3">
          {slides.map((group, i) => (
            <div
              key={i}
              className={`carousel-item ${i === 0 ? "active" : ""}`}
            >
              <div className="row justify-content-center">
                {group.map((item) => (
                  <div className="col-md-3" key={item.id}>
                    <div className="card shadow-sm border-0 rounded-3">
                      <div className="card-body">
                        <p className="card-text fst-italic">
                          "{item.body.substring(0, 100)}..."
                        </p>
                        <h6 className="card-title text-stone-800 mb-0">
                          {item.name.substring(0,30)}
                        </h6>
                        <small className="text-muted">{item.email}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <GrPrevious />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <GrNext />
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
