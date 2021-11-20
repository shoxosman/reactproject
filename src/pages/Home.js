import React from "react";
import CarouselHome from "./CarouselHome";
import TheCards from "./TheCards";

export default function Home() {
  return (
    <div className="container mt-5">
      <CarouselHome />
      <TheCards />
    </div>
  );
}
