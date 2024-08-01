import AboutSection from "@/components/AboutSection";
import AboutSectionSecond from "@/components/AboutSectionSecond";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <AboutSection />
      <AboutSectionSecond />
      <Footer />
    </div>
  );
};

export default page;
