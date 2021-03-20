import React from "react";
import styled from "styled-components";

const PageWrapper = ({ className, title, children }) => {
  return (
    <StyledPageWrapper>
      <Header>
        <i className={className}></i>
        <span>{title}</span>
      </Header>
      <StyledChildren>{children}</StyledChildren>
    </StyledPageWrapper>
  );
};
const StyledPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 4rem;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    font-size: 1.5rem;
    padding: 1em;
    color: #545d68;
  }
  i {
    font-size: 3rem;
    padding: 0.5em 0;
    color: #545d68;
    font-style: normal;
  }
`;
const StyledChildren = styled.div`
  background: #f7f7f7;
  height: 100%;
  width: 100%;
  box-shadow: 0 0 7px rgb(0 0 0 /20%);
  padding: 1rem;
`;
export default PageWrapper;
