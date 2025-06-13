import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;
const CustomCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://backend-crud-one.vercel.app/product")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        {products.length === 0 && <p>No products found.</p>}
        {products.map((product, index) => (
          <div className="col-lg-3 mb-4" key={index}>
            <Card
              className="text-center text-white"
              style={{ backgroundColor: "#492581" }}
              hoverable
              cover={
                <img
                  className="zoom-img"
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  }}
                />
              }
            >
              <Meta title={<b>💖 {product.director}</b>} />
              <br />
              <p>
                <b>🎬</b> {product.name}
              </p>
              <p>
                <strong>✨Release Date:</strong> {product.releasedate}
              </p>
              <h5 className="text-danger mb-4">
                <strong>💵 Ticket Price:</strong> {product.ticketprice}
              </h5>
              <Link to={`/buy/${product._id}`}>
                <button className="btn-zoom" style={{ width: "150px" }}>
                  Buy Now
                </button>
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCard;
