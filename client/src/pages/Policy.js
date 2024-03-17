import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.webp"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          At Ecommerce App , transparency and trust are at the core of everything we do.
          We are committed to ensuring your shopping experience is secure, seamless, and enjoyable. 
          Our policies are designed to protect your privacy, guarantee the quality of our products,
          and provide fair terms for transactions. From our refund and return policies to our commitment
          to data protection, you can shop with confidence knowing that your satisfaction and security are 
          our top priorities.
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
