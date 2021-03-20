import React from "react";
// STYLED
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//COMPONENTS
import Header from "../components/Header";
import Stores from "../components/Stores";
import AdsCard from "../components/AdsCard";
import FeaturedProducts from "../components/FeaturedProducts";
const HomePage = () => {
  return (
    <div>
      <Header />
      <Stores />
      <AdsCard />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
