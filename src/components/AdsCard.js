import React from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//IMAGES
import shop_banner_1 from "../images/shop_banner_1.jpg";
import shop_banner_2 from "../images/shop_banner_2.jpg";
import shop_banner_3 from "../images/shop_banner_3.jpg";
// components
import Line from "../components/Line";
const AdsCard = () => {
  const banners = [
    { img: shop_banner_1 },
    { img: shop_banner_2 },
    { img: shop_banner_3 },
  ];
  return (
    <Wrapper>
      <h2>الاعلانات</h2>
      <Line></Line>
      <StyledCards>
        <Card>
          <img src={banners[0].img} alt="" />
        </Card>{" "}
        <Card>
          <img src={banners[1].img} alt="" />
        </Card>{" "}
        <Card>
          <img src={banners[2].img} alt="" />
        </Card>
      </StyledCards>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 0 4rem;
  h2 {
    font-size: 3rem;
  }
  @media (max-width: 400px) {
    padding: 1rem;
  }
`;
const StyledCards = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Card = styled(motion.div)`
  width: auto;
  height: 100%;
  margin: 0 1rem;
  flex: 1 1 300px;
  cursor: pointer;
  margin-top: 1rem;
  img {
    height: 50vh;
    width: 100%;
  }
`;
export default AdsCard;
