import React, { useState, useRef, useEffect } from "react";
//STYLE
import styled from "styled-components";
//ANIMATION
import { motion } from "framer-motion";
import product_img1 from "../images/product_img1.jpg";
import product_img2 from "../images/product_img1-2.jpg";
import product_img3 from "../images/product_img1-3.jpg";
import product_img4 from "../images/product_img1-4.jpg";
import thumbnail from "../images/product_img2.jpg";

//
import { zoomIn } from "../util";
//
import ShopProduct from "../components/ShopProduct";
import ImageSlider from "../components/ImageSlider";
import AddToCart from "../components/AddToCart";
const ProductDetails = () => {
  const img = useRef(null);
  const [currentImage, setCurrentImage] = useState(product_img1);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [showSlider, setShowSlider] = useState(false);
  const initStateZoom = (e) => {
    img.current.style = "transform:translate(0,0) scale(1)";
  };
  const imagesarr = [product_img1, product_img2, product_img3, product_img4];

  const ImageSliderHandler = (e) => {
    setShowSlider(!showSlider);
  };
  useEffect(() => {
    if (showSlider) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSlider]);

  console.log(showSlider);
  return (
    <StyledProductDetails>
      <Wrapper>
        <Images>
          <MainImage
            onMouseLeave={initStateZoom}
            onMouseMove={(e) => zoomIn(e, img.current)}
            onClick={ImageSliderHandler}
            background={currentImage}
          >
            <div ref={img} className="magnifier"></div>
            {/* <img ref={img} src={currentImage} alt="" /> */}
          </MainImage>
          <SubImages>
            <img
              className={currentImage === product_img1 ? "active" : ""}
              src={product_img1}
              onClick={() => setCurrentImage(product_img1)}
              alt=""
            />
            <img
              className={currentImage === product_img2 ? "active" : ""}
              src={product_img2}
              onClick={() => setCurrentImage(product_img2)}
              alt=""
            />
            <img
              className={currentImage === product_img3 ? "active" : ""}
              src={product_img3}
              onClick={() => setCurrentImage(product_img3)}
              alt=""
            />
            <img
              className={currentImage === product_img4 ? "active" : ""}
              src={product_img4}
              onClick={() => setCurrentImage(product_img4)}
              alt=""
            />
          </SubImages>
        </Images>
        <AboutProduct>
          <Info>
            <Title>Blue Dress For Woman</Title>
            <Price>
              <span
                style={{
                  color: "#FF324D",
                  fontSize: "2rem",
                  padding: "0 1rem",
                }}
              >
                20.00$
              </span>{" "}
              <span
                style={{
                  textDecoration: "line-through",
                  fontSize: "1.5rem",
                  color: "gray",
                }}
              >
                30$
              </span>{" "}
              <span style={{ color: "green", fontSize: "1.5rem" }}>
                خصم 35%
              </span>{" "}
            </Price>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit massa enim. Nullam id varius nunc id varius nunc.
            </Description>
            <Advantages>
              <Advantage>
                <i className="fal fa-sync"></i>1 Year AL Jazeera Brand Warranty
              </Advantage>
              <Advantage>
                <i className="fal fa-sync"></i>1 Year AL Jazeera Brand Warranty
              </Advantage>
              <Advantage>
                <i className="fal fa-sync"></i>1 Year AL Jazeera Brand Warranty
              </Advantage>
            </Advantages>
            <Colors>
              <Title>
                <h2>الالوان</h2>
              </Title>
              <span></span>
              <span></span>
              <span></span>
            </Colors>
            <Size>
              <Title>
                <h2>الاحجام</h2>
              </Title>
              <span>XS</span>
              <span>S</span>
              <span>M</span>
            </Size>{" "}
          </Info>
          <AddToCartWrapper>
            {" "}
            <AddToCart
              cartQuantity={cartQuantity}
              setCartQuantity={setCartQuantity}
            ></AddToCart>
            <button>add to cart</button>
          </AddToCartWrapper>

          <Share></Share>
        </AboutProduct>
      </Wrapper>{" "}
      <Related>
        <Title>
          <h2>منتجات ذات صلة</h2>
        </Title>
        <Products>
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
        </Products>
      </Related>
      {showSlider && (
        <ImageSlider
          images={imagesarr}
          showSlider={showSlider}
          setShowSlider={setShowSlider}
        />
      )}
    </StyledProductDetails>
  );
};
const StyledProductDetails = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Wrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 4rem;
`;
const Images = styled(motion.div)`
  flex: 1 1 30%;
  min-width: 30%;
  height: 100%;
  padding: 0.5rem;
`;
const MainImage = styled(motion.div)`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  border: 2px solid #ddd;
  pointer-events: all;
  cursor: crosshair;
  pointer-events: all;
  transform-origin: center;
  position: relative;
  .magnifier {
    position: absolute;
    cursor: crosshair;
    width: 100%;
    height: 100vh;
    pointer-events: none;
    background: url(${(props) => props.background});
    background-repeat: no-repeat;
    background-position: center;
  }
`;
const SubImages = styled(motion.div)`
  width: 100%;
  display: flex;
  padding: 1rem 0;
  img {
    margin-left: 6.5%;
    width: 20%;
    height: 25%;
    border: 1px solid #ddd;
  }
  .active {
    border: 1px solid #ff324d;
  }
`;
const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ddd;
`;
const AboutProduct = styled(motion.div)`
  padding: 2rem 1rem;
  flex: 1 1 50%;
`;
const Title = styled(motion.div)`
  width: 100%;
  font-size: 2rem;
`;
const Price = styled(motion.div)``;
const Description = styled(motion.div)`
  width: 55ch;
  @media (max-width: 900px) {
    width: 30ch;
  }
`;
const Advantages = styled(motion.div)`
  width: 100%;
  color: #ff324d;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
`;
const Advantage = styled(motion.div)`
  font-size: 0.8rem;
  padding: 0.1rem 0;

  i {
    font-family: "Font Awesome 5 Free";
    padding-left: 1rem;
    font-weight: 900;

    font-size: 1rem;
  }
`;

const Colors = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 0;
  ${Title} {
    width: 3ch;
    h2 {
      width: 10ch;
      font-size: 1rem;
    }
  }
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
const Size = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 1rem;
  align-items: center;
  ${Title} {
    width: 3ch;
    h2 {
      width: 10ch;
      font-size: 1rem;
    }
  }
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

const Related = styled(motion.div)`
  padding: 2rem 4rem;
  width: 100%;
  height: 100%;
`;
const Share = styled(motion.div)``;
const Products = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: 1fr;
  place-items: center;
  gap: 1rem;
  background: transparent;
  padding: 1rem;
`;
const AddToCartWrapper = styled.div`
  display: flex;
  padding: 2rem 0;
  border-bottom: 1px solid #ddd;
  align-items: center;
  button {
    width: 25%;
    background-color: #ff324d;
    border: none;
    padding: 1rem;
    color: white;
    text-transform: capitalize;
    font-size: 1.3rem;
    font-weight: bold;
    min-width: 30%;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: #ac1b2e;
    }
    @media (max-width: 900px) {
      width: 50%;
    }
  }
`;
export default ProductDetails;
