import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Slider from "@material-ui/core/Slider";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const MultiThumbBar = () => {
  const [value, setValue] = React.useState([100, 300]);
  const handleChange = (e, newValue) => {
    setValue(newValue);
    console.log(e.target);
  };

  const SliderEdited = withStyles({
    root: {
      width: "100%",
    },
    thumb: {
      height: 15,
      width: 15,
      backgroundColor: "white",
      boxShadow: "0 0 0 2px rgb(0 0 0 /20%)",
    },
    track: {
      backgroundColor: "#ff324d",
      height: "6px",
    },
    rail: {
      opacity: 1,
      height: "6px",
      backgroundColor: "#ddd",
    },
  })(Slider);
  return (
    <StyledMulti>
      <SliderEdited
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={100}
        max={800}
      />
      <span>
        price : {value[0]}-{value[1]}
      </span>
    </StyledMulti>
  );
};
const StyledMulti = styled.div`
  display: flex;
  flex-direction: column;
`;
export default MultiThumbBar;
