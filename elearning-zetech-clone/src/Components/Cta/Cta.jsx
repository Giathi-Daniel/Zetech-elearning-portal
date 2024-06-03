import React from "react";

const Cta = () => {
  return (
    <>
      <section className="container">
        <div className="call_to-action">
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
        </div>
      </section>
    </>
  );
};

export default Cta;
