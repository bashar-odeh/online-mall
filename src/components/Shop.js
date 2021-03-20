import React, { useState } from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
//IMAGES
import ShopProduct from "./ShopProduct";
import thumbnail from "../images/product_img2.jpg";
import arrow from "../images/arrow.png";
import ReactSlider from "react-slider";
import CheckBox from "./CheckBox";
import MultiThumbBar from "./MultiThumbBar";
const Shop = () => {
  const [page, SetPage] = useState(0);
  let response = [];
  for (let i = 0; i < 48; i++) {
    response.push(
      <ShopProduct
        className="pro"
        img={thumbnail}
        title="Blue Dress For Woman"
        price="40"
        price_before="80"
        off="off 20%"
        rate="4 stars"
        direction="column"
      />
    );
  }
  let panels = [];
  let x = Math.ceil(response.length / 9);
  for (let i = 0; i < x; i++) {
    panels[i] = response.slice(0, 9);
    response = response.slice(9);
  }

  return (
    <StyledShop>
      <Title>متجر فتوح $</Title>
      <ShopWrapper>
        <ProductsWrapper>
          {" "}
          <Products>{panels[page]} </Products>{" "}
          <Pages>
            {panels.map((element, index) => (
              <span
                onClick={(e) => {
                  SetPage(index);
                }}
                className={index === page ? "active" : ""}
              >
                {index + 1}
              </span>
            ))}
          </Pages>
        </ProductsWrapper>

        <Filter>
          <List>
            <FilterTitle>
              <h2>الفئات</h2>
            </FilterTitle>
            <CategoryElement>
              <div>
                {" "}
                <img src={arrow} alt="" />
                <li>الافضل لدينا</li>
              </div>
              <span>(9)</span>
            </CategoryElement>
            <CategoryElement>
              <div>
                {" "}
                <img src={arrow} alt="" />
                <li>بلايز</li>
              </div>{" "}
              <span>(9)</span>
            </CategoryElement>
            <CategoryElement>
              <div>
                {" "}
                <img src={arrow} alt="" />
                <li>كذا</li>
              </div>{" "}
              <span>(90)</span>
            </CategoryElement>
            <CategoryElement>
              <div>
                {" "}
                <img src={arrow} alt="" />
                <li>رجال</li>{" "}
              </div>
              <span>(9)</span>
            </CategoryElement>
          </List>
          <PriceRange>
            <FilterTitle>
              <h2>السعر</h2>
            </FilterTitle>

            <MultiThumbBar />
          </PriceRange>
          <Brands>
            <List>
              <CheckBox title="Lighting" />
              <CheckBox title="Lighting" />
              <CheckBox title="Lighting" />
              <CheckBox title="Lighting" />
            </List>
          </Brands>
          <Size>
            <FilterTitle>
              <h2>الاحجام</h2>
            </FilterTitle>
            <span>XS</span>
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
            <span>2XL</span>
            <span>3XL</span>
          </Size>{" "}
          <Colors>
            <FilterTitle>
              <h2>الالوان</h2>
            </FilterTitle>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Colors>
        </Filter>
      </ShopWrapper>
    </StyledShop>
  );
};
const StyledShop = styled(motion.div)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 4rem;
  background: transparent;
`;
const Title = styled(motion.div)`
  width: 100%;
  padding: 2rem 0;
  font-size: 3rem;
`;
const ShopWrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  background: transparent;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 4rem 0;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
const Filter = styled(motion.div)`
  width: 50%;
  height: 100%;
  margin-right: 1rem;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
const Products = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: 1fr;
  place-items: center;
  gap: 1rem;
  background: transparent;
`;
const ProductsWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const List = styled.ul`
  width: 100%;
  justify-content: flex-start;
  color: black;
  padding: 1rem;
  border-bottom: 2px solid #ddd;
  li {
    list-style-type: none;
    padding: 0.2rem 0;
    margin: 0 0.5rem;
    cursor: pointer;
    font-size: 1.2rem;
    &:hover {
      color: #ff324d;
    }
  }
`;
const FilterTitle = styled(Title)`
  padding: 1rem;
  h2 {
    font-size: 1.2rem;
  }
`;
const CategoryElement = styled(motion.div)`
  display: flex;
  padding: 0 0.5rem;
  justify-content: space-between;
  align-items: center;
  div {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      padding: 0.2rem 1rem;
    }
  }

  img {
    height: 25px;
    width: 25px;
  }
`;
const PriceRange = styled.div`
  height: auto;
  width: 100%;
  padding: 1rem;
  border-bottom: 2px solid #ddd;
`;

const Brands = styled.div`
  width: 100%;
  height: auto;
`;
const Size = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 2px solid #ddd;

  span {
    flex: 1 1 3ch;
    max-width: 5ch;
    text-align: center;
    border: 2px solid #ddd;
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 1.1rem;
  }
`;
const Colors = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 2px solid #ddd;

  span {
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 100%;
    border: 2px solid #ddd;
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 1.1rem;
    background-color: #ff324d;
  }
`;
const Pages = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .active {
    background-color: #ff324d;
    border: none;
    color: white;
  }
  span {
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0.5rem;
    border: 2px solid #ddd;
    margin: 0.2rem;
    cursor: pointer;
  }
`;
export default Shop;
