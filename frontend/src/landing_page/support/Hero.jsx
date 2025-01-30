import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="pt-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3" >
        <div className="col-6" id="support">
          <h5 className="fs-4 pb-3">
            Search for an answer or browse help topics to create a ticket
          </h5>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="" className="mb-3">Track account opening</a>&nbsp;&nbsp;
          <a href="" className="mb-3">Track segment activation</a>&nbsp;&nbsp;
          <a href="" className="mb-3">Intraday margins</a><br />
          <a href="" className="mb-3">Kite user manual</a>&nbsp;&nbsp;
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="" className="mb-3">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" className="mb-3">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
