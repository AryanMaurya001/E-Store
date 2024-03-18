import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to our streamlined E-commerce app, your go-to destination for all things tech-related! Whether you're in search of cutting-edge laptops, ergonomic mice, premium earphones, or chargers for mobile phones and laptops, our extensive selection has you covered. Explore our user-friendly interface and discover the perfect products to enhance your digital experience. With our commitment to quality and convenience, we ensure that every purchase leaves you fully satisfied. Welcome aboard to effortless tech shopping at its finest!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
