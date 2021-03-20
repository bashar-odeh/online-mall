import React, { useState, useRef, useEffect } from "react";
// Style
import styled from "styled-components";
// animation
import { motion } from "framer-motion";
// images

import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
const CMSnavbar = ({ toggleNav, setToggleNav }) => {
  const { pathname } = useLocation();
  const history = useHistory();
  const [current, setCurrent] = useState(0);
  const ExpandHandler = (e) => {
    e.target.children[1].children[0].classList.toggle(
      "active-cms-nav-expantion"
    );
    // e.target.nextSibling.children[0].classList.toggle(
    //   "active-cms-nav-expantion"
    // );
    // arrowSwapper(e.target);
  };
  const arrowSwapper = (e) => {
    // let element = e.children[0].children[1].children[0].classList;
    // let attr = parseInt(
    //   e.children[0].children[1].children[0].getAttribute("angle")
    // );
    // let element = e.children[0].children[1].children[0];
    // element.style.transform = `rotate(${attr + 180}deg)`;
    // element.setAttribute("angle", (attr += 180));
    // if (element.contains("fa-chevron-down")) {
    //   element.remove("fa-chevron-down");
    //   element.add("fa-chevron-up");
    // } else {
    //   element.add("fa-chevron-down");
    //   element.remove("fa-chevron-up");
    // }
  };
  const subMenuHandler = (e) => {};

  useEffect(() => {
    let indicator = pathname.split("/")[2];
    console.log(indicator);
    switch (indicator) {
      case "dashboard":
        setCurrent(0);
        break;
      case "points":
        setCurrent(3);
        break;
      default:
        setCurrent(0);
    }
  }, []);

  // window.addEventListener("scroll", () => {
  //   let nav = document.querySelector(".cms-nav");

  //   if (window.pageYOffset >= 20) {
  //     nav.style.top = "0";
  //     nav.style.transition = "  transition: all 0.2s ease";
  //   } else {
  //     nav.style.top = "10%";
  //     nav.style.transition = "  transition: all 0.75s ease";
  //   }
  // });
  return (
    <StyledNavbar
      className={`${toggleNav ? "active-nav-cms cms-nav" : "cms-nav"}`}
    >
      <Item>
        <div style={{ padding: "0.5rem" }}>
          <li style={{ fontSize: "0.7rem" }}>التنقل</li>
        </div>
      </Item>
      <StyledLink to="/cms/dashboard">
        <Item
          onClick={(e) => {
            setCurrent(0);
          }}
          className={`${current === 0 ? "active-item" : ""}`}
          key={0}
        >
          <div className="inner">
            <i className="fas fa-home"></i>
            <li>الرئيسية</li>
          </div>
        </Item>
      </StyledLink>
      <StyledLink>
        <Item
          onClick={(e) => {
            setCurrent(1);
          }}
          key={1}
          className={`${current === 1 ? "active-item" : ""}`}
        >
          <div className="outter">
            <div className="inner">
              <i className="fas fa-edit"></i> <li>تعديل معلومات المتجر</li>
            </div>
            <i
              className={`${
                current === 1
                  ? "fas fa-chevron-down rotate makeright"
                  : "fas fa-chevron-down makeright"
              }`}
            ></i>
          </div>
          <Hide>
            <Expand
              className={`${current === 1 ? "active-cms-nav-expantion" : ""}`}
            >
              <li>العنصر التالي </li>
            </Expand>
          </Hide>
        </Item>
      </StyledLink>{" "}
      <StyledLink>
        <Item
          onClick={(e) => {
            setCurrent(2);
          }}
          key={2}
          className={`${current === 2 ? "active-item" : ""}`}
        >
          <div className="outter">
            <div className="inner">
              <i className="fas fa-th-large"></i>
              <li>الفئات والعناصر</li>
            </div>
            <i
              className={`${
                current === 2
                  ? "fas fa-chevron-down rotate makeright"
                  : "fas fa-chevron-down makeright"
              }`}
            ></i>
          </div>
          <Hide>
            <Expand
              className={`${current === 2 ? "active-cms-nav-expantion" : ""}`}
            >
              <li>العنصر التالي </li>
            </Expand>
          </Hide>
        </Item>
      </StyledLink>{" "}
      <StyledLink to="/cms/points">
        <Item
          onClick={(e) => {
            setCurrent(3);
          }}
          key={3}
          className={`${current === 3 ? "active-item" : ""}`}
        >
          <div className="outter">
            <div className="inner">
              <i className="fas fa-share"></i> <li>النقاط</li>
            </div>
          </div>
        </Item>
      </StyledLink>
    </StyledNavbar>
  );
};
const StyledNavbar = styled(motion.div)`
  width: 15%;
  height: auto;
  position: fixed;
  top: 8%;
  transform: translateX(100%);
  opacity: 0;
  min-height: 100vh;
  background: #1d2939;
  color: white;
  transition: all 0.75s ease;

  li {
    list-style-type: none;
    padding: 1em;
    padding-right: 0;
    font-size: 0.8rem;
    transition: 0.2s all ease-in-out;
    pointer-events: all;
    cursor: pointer;
    pointer-events: none;
    color: lightgray;
  }

  @media (max-width: 900px) {
    width: auto;
  }
  .active-li {
    margin-left: 2rem;
    background: black;
    color: black;
  }
  .active-cms-nav-expantion {
    opacity: 1;
    max-height: 50vh;
  }
  .active-item {
    background: #1baca1;
  }
  .rotate {
    transform: rotate(180deg);
  }
`;
const Item = styled(motion.div)`
  width: 100%;
  i {
    pointer-events: none;
    transition: all 0.2s ease;
  }
  .outter {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .makeright {
      margin-left: 0.5rem;
    }
  }
  .inner {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    pointer-events: none;
    li,
    i {
      margin-right: 0.5em;
    }
  }
`;
const Expand = styled(motion.div)`
  width: 100%;
  transition: all 0.2s ease-in-out;
  max-height: 0;
  background: rgb(0, 0, 0, 0.5);
  padding: 0;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Logo = styled.div`
  overflow: hidden;
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: white;
    text-decoration: none;
  }
`;
export default CMSnavbar;
