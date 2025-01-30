import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mb-5 text-center border-bottom  ">
        <h1 className="mt-5">Charges</h1>
        <h5 className="text-muted mb-5 mt-3">List of all charges and taxes</h5>
      </div>
      <div className="row">
        <div className="col-4 p-5">
          <img src="Media/images/pricingEquity.svg" style={{width:"70%"}}/>
          <h2>Free equity delivery</h2>
          <p className="text-muted mt-4">
            All equity delivery investments (NSE, BSE)<br/>are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="Media/images/intradayTrades.svg" style={{width:"70%"}}/>
          <h2>Intraday and F&O trades</h2>
          <p className="text-muted mt-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per<br/>executed order on
            intraday trades across<br/>equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="Media/images/pricingEquity.svg" style={{width:"70%"}}/>
          <h2>Free direct MF</h2>
          <p className="text-muted mt-4">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
