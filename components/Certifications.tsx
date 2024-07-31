"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCertificates() {
  return (
    <section className="h-[40rem] rounded-md flex flex-col antialiased bg-[#EEFFF3]  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={certifications}
        direction="right"
        speed="slow"
      />
    </section>
  );
}

const certifications = [
  {
    name: "certificate_1",
    imgSrc: "/assets/HeiligerKral.JPG",
    description: "A Tale of Two Cities",
  },
  {
    name: "William Shakespeare",
    imgSrc: "/assets/HeiligerKral.JPG",
    description: "Hamlet",
  },
];
