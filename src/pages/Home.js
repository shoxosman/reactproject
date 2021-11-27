import React from "react";
import CarouselHome from "../components/CarouselHome";
import TheCards from "../components/TheCards";

export default function Home() {
  return (
    <div className="container home">
      <CarouselHome />
      <TheCards />
    </div>
  );
}
