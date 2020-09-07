import React from "react";
import HeaderCategories from "./_sharedComponents/HeaderCategories";
import HomeItems from "./HomeItems";
import Sponsors from "./Sponsors";
import LastArticlesCarousel from "./LastArticlesCarousel";

function Home() {
  return (
    <>
      <HeaderCategories />
      <br />
      <HomeItems />
      <br />
      <LastArticlesCarousel />
      <br />
      <Sponsors />
    </>
  );
}

export default Home;
