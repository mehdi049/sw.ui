import React from "react";
import HeaderCategories from "../_sharedComponents/HeaderCategories";
import HomeItems from "./HomeItems";
import HomeCarousel from "./HomeCarousel";

function Home() {
  return (
    <>
      <HeaderCategories />
      <HomeCarousel />
      <HomeItems />
    </>
  );
}

export default Home;
