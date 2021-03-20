import React, { useState, useEffect } from "react";
// STYLED
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//IMAGES
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import arrow from "../images/arrow.png";
import arrow_right from "../images/arrow_right.png";
// uuid
import { v4 as uuid } from "uuid";
const Header = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [
    {
      id: uuid(),
      image: banner1,
      text: "Get up to 50% off Today Only!",
      header: "Woman Fashion",
    },
    {
      id: uuid(),

      image: banner2,
      text: "Get up to 50% off Today Only!",
      header: "Man Fashion",
    },
    {
      id: uuid(),

      image: banner3,
      text: "Taking your Viewing Experience to Next Level",
      header: "Summer Sale",
    },
  ];
  const bannerCarusal = (direction) => {
    if (direction === "next") {
      setCurrentBanner((p) => (p + 1) % banners.length);
    } else {
      setCurrentBanner((p) => (p - 1) % banners.length);
    }
  };
  const animateSlider = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.8,
      },
    },
    exit: {
      opacity: 0,
    },
  };
  const animateTextContianer = {
    hidden: {
      x: "200%",
    },
    show: {
      x: "0%",
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
    exit: {
      x: "200%",
    },
  };
  const animateText = {
    hidden: {
      x: "200%",
    },
    show: {
      x: "0%",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      x: "200%",
    },
  };
  return (
    <Wrapper>
      <StyledHeader
        variants={animateSlider}
        initial="hidden"
        animate="show"
        banner={banners[Math.abs(currentBanner)].image}
      >
        <Hide>
          <Text>
            <motion.div
              key={banners[Math.abs(currentBanner)].id}
              variants={animateTextContianer}
            >
              <motion.h2 variants={animateText}>
                {banners[Math.abs(currentBanner)].header}
              </motion.h2>
              <motion.p variants={animateText}>
                {banners[Math.abs(currentBanner)].text}
              </motion.p>
              <motion.button variants={animateText}>SHOP NOW</motion.button>
            </motion.div>
          </Text>
        </Hide>
        <Arrows>
          <img onClick={() => bannerCarusal("next")} src={arrow_right} alt="" />
          <img onClick={() => bannerCarusal("back")} src={arrow} alt="" />
        </Arrows>
      </StyledHeader>
    </Wrapper>
  );
};
const Wrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  min-height: 80vh;
`;
const Hide = styled(motion.div)`
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 70vh;
`;
const StyledHeader = styled(motion.div)`
  width: 100%;
  height: 80vh;
  margin-top: 2rem;
  background-repeat: no-repeat;
  position: relative;
  transition: all 0.8s ease;
  position: relative;
  /* transform: translateX(-55%); */
  background-image: url(${(props) => props.banner});
  background-position-x: 40%;
  @media (max-width: 425px) {
    background-position-x: 35%;
  }
`;
const Arrows = styled.div`
  width: 100%;
  height: 10vh;
  position: absolute;
  top: 50%;
  left: 0;
  display: flex;
  justify-content: space-between;
  transition: all 1s ease;
  z-index: 3;
  img {
    height: 40px;
    width: 40px;
    background: white;
    margin: 0 1rem;
    box-shadow: 0 0 5px black;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      background: #ff324d;
    }
  }
  @media (max-width: 425px) {
    top: 60%;
  }
`;
const Text = styled(motion.div)`
  height: auto;
  width: auto;
  overflow: hidden;
  box-shadow: -10px 0px 10px 1px #aaaaaa;
  position: absolute;
  padding: 1rem;
  bottom: 25%;
  right: 5%;
  transition: all 1s ease;
  h2 {
    font-size: 4rem;
    padding: 0.5rem 0;
  }
  p {
    font-size: 1.4rem;
    color: #292b2c;
    padding: 0.5rem 0;
  }
  button {
    padding: 1rem 2rem;
    color: white;
    border: none;
    background: #ff324d;
    margin: 1rem 0;
  }
  @media (max-width: 768px) {
    top: 0;
    left: 0;
    right: 0;
    box-shadow: none;
    h2 {
      font-size: 2rem;
    }
  }
  @media (max-width: 425px) {
    top: 0;
    left: 0;
    right: 0;
    box-shadow: none;

    h2 {
      font-size: 2rem;
    }
  }
`;
export default Header;
