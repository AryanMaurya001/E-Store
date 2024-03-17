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
          Welcome to Ecommerce App ,where passion meets innovation.
           We're dedicated to curating an exceptional shopping experience, 
           tailored just for you. Our journey began with a simple goal: 
           to connect people with the products they love, all within a 
           seamless and secure platform. With a team driven by creativity 
           and a commitment to excellence, we strive to redefine online 
           shopping by offering a diverse range of products, coupled with 
           unparalleled customer service. Join us on this exciting adventure
            as we continue to push boundaries, exceed expectations,
             and deliver joy with every purchase made at Ecommerce App.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
