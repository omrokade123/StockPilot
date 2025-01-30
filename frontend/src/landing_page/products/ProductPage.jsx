import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Navbar from "../Navbar";
import Footer from "../Footer";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageurl="Media/images/kite.png"
        productname="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="try Demo"
        learnMore="learn more"
        googleplay=""
        appstore=""
      />
      <RightSection
        imageurl="Media/images/console.png"
        productname="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="learn more"
      />
      <LeftSection
        imageurl="Media/images/coin.png"
        productname="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="try demo"
        learnMore="learn more"
        googleplay=""
        appstore=""
      />
      <RightSection
        imageurl="Media/images/kiteconnect.png"
        productname="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase"
        learnMore="kite connect"
      />
      <LeftSection
        imageurl="Media/images/varsity.png"
        productname="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="try demo"
        learnMore="learn more"
        googleplay=""
        appstore=""
      />

      <Universe />
    </>
  );
}

export default ProductPage;
