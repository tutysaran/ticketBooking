import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Owl = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://backend-crud-one.vercel.app/product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: "auto", marginTop: 50 }}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              padding: 10,
              margin: "0 10px",
              width: 300,
              height: 400,
              backgroundColor: "#492581",
              borderRadius: 10,
              color: "white",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                maxHeight: 280,
                borderRadius: 10,
                objectFit: "cover",
              }}
            />
            <h5 style={{ marginTop: 10 }}>{product.name}</h5>
            <p>Release Date: {product.releasedate}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Owl;
