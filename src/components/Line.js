import React from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//IMAGES
const Line = () => {
  return <StyledLine></StyledLine>;
};
const StyledLine = styled(motion.div)`
  width: 100%;
  height: 1px;
  background-color: #333;
  opacity: 0.5;
`;
export default Line;
