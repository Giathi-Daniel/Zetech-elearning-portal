import React from "react";
import './Cta.css'

const Cta = () => {
  return (
    <>
      <section className="container action__container">
          <div className="call_to_action-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              esse.
            </p>
          </div>
          <div className="call_to_action-input">
            <input type="email" name="email" id="emailInput" />
            <button type="submit">Call to action</button>
          </div>
      </section>
    </>
  );
};

export default Cta;
