import AboutFirst from "@/components/AboutFirst";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import AboutSecond from "@/components/AboutSecond";

const page = () => {
  return (
    <div>
      <Navbar />
      <AboutFirst />
      <AboutSecond />
      <Footer />
    </div>
  );
};

export default page;
