import React, { useState } from "react";
import SideNavbar from "../CMS/CMSnavbar";
import { Switch, Route } from "react-router-dom";
// style
import styled from "styled-components";
// images
import menu from "../images/menu.png";
import logo from "../images/logo.png";
// pages
import Dashboard from "../CMS/pages/Dashboard";
import Points from "../CMS/pages/Points";
const CMS = () => {
  const [toggleNav, setToggleNav] = useState(true);
  return (
    <Wrapper>
      <StyledHaeder>
        <div className="header">
          <img src={logo} alt="" />
        </div>
        <div onClick={() => setToggleNav(!toggleNav)} className="image">
          <img src={menu} alt="" />
        </div>
        <div className="prof">
          <div className="prof-image"></div>
          <span>فتوح</span>
        </div>
      </StyledHaeder>
      <SideNavbar toggleNav={toggleNav} setToggleNav={setToggleNav} />
      <Main toggleNav={toggleNav}>
        <InWrapper>
          <Switch>
            <Route path={["/cms", "/cms/dashboard"]} exact>
              <Dashboard />
            </Route>{" "}
            <Route path={["/cms/points"]}>
              <Points />
            </Route>
          </Switch>
        </InWrapper>
      </Main>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  .active-nav-cms {
    transform: translateX(0);
    opacity: 1;
  }
`;
const InWrapper = styled.div`
  background: #f7f7f7;
  flex: 1 1 75%;
  padding: 2rem;
`;

const Main = styled.div`
  height: 100%;
  margin-right: ${(props) => (props.toggleNav ? "15%" : "0")};
  transition: 0.2s all ease-in-out;
`;

const StyledHaeder = styled.div`
  width: auto;
  position: fixed;
  width: 100%;
  display: flex;
  height: 8vh;
  box-shadow: 0 0 7px rgb(0 0 0 / 10%);
  background: white;
  overflow: hidden;
  .header {
    flex: 0 1 14.9%;
    text-align: center;
  }
  .image {
    flex: 0 0 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 2px solid #ccc;
    border-left: 2px solid #ccc;
    cursor: pointer;
    img {
      height: 25px;
      width: 25px;
      background: transparent;
    }
  }
  .prof {
    flex: 1 1 75%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border: none;
    .prof-image {
      width: 50px;
      height: 50px;
      background-color: gray;
      border-radius: 50%;
      margin-left: 10px;
    }
    padding-left: 5%;
  }
`;
export default CMS;
