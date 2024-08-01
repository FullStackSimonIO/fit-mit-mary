import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { MapComponent } from "@/components/Map";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <MapComponent />
      <Footer />
    </div>
  );
};

export default page;
