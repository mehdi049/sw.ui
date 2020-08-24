import React from "react";
import HomeItems from "./HomeItems";
import Sponsors from "./Sponsors";
import LastArticlesCarousel from "./LastArticlesCarousel";

function Home() {
  return (
    <>
      <HomeItems />
      <br />
      <LastArticlesCarousel />
      <br />
      <Sponsors />
    </>
  );
}

export default Home;
