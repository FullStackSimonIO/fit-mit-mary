import { Hero } from "@/components/Hero";
import { LayoutGrid } from "@/components/ui/layout-grid";
import Navbar from "@/components/Navbar";
import React from "react";

import { InfiniteMovingCertificates } from "@/components/Certifications";
import Info from "@/components/Info";
import LandingOffers from "@/components/LandingOffers";

const Home = () => {
  return (
    <div className="bg-[#EEFFF3]">
      <Navbar />
      <Hero />
      <Info />
      <LandingOffers />
    </div>
  );
};
export default Home;
