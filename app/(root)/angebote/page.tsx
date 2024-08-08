import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SportOffer from "@/components/SportOffer";
import YogaOffers from "@/components/YogaOffers";
import YogaTypes from "@/components/YogaTypes";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <YogaOffers />
      <YogaTypes />
      <SportOffer />
      <Footer />
    </div>
  );
};

export default page;
