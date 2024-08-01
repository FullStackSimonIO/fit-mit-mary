import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { MapComponent } from "@/components/Map";
import Navbar from "@/components/Navbar";
import { MapProvider } from "@/providers/maps-provider";
import React from "react";

const page = () => {
  return (
    <MapProvider>
      <div>
        <Navbar />
        <ContactForm />
        <MapComponent />
        <Footer />
      </div>
    </MapProvider>
  );
};

export default page;
