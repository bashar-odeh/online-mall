import React from "react";
//STYLE
import styled from "styled-components";
//ANIMATION

//IMAGES
const CheckBox = ({ title, name, id }) => {
  return (
    <StyledCheckBox>
      <input type="checkbox" name={name} id={id} />
      <label>{title} </label>
    </StyledCheckBox>
  );
};
const StyledCheckBox = styled.div`
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  input[type="checkbox"] {
    appearance: none;
    height: 20px;
    width: 20px;
    background-color: white;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #ddd;
    margin-left: 1rem;
  }

  input[type="checkbox"]:after {
    font-family: "Font Awesome 5 Free";
    content: "\f00c";
    font-weight: 900;
    color: white;
    display: none;
    font-size: 1rem;
  }

  input[type="checkbox"]:checked {
    background: #ff324d;
    border: none;
  }
  input[type="checkbox"]:checked:after {
    display: block;
  }
  input[type="checkbox"]:focus {
    outline: none;
  }
`;
export default CheckBox;
