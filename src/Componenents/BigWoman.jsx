import { Fragment } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import woman from "../assets/womanwithipad.png";

const Wrapper = styled.div`
  position: relative;
`;

const Container1 = styled.div`
  background: #f1e6ff;
  border-radius: 8px;
  padding: 0.2rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  ${media.lessThan("medium")`
    width: 33vw;
    `}

  ${media.greaterThan("medium")`
    width: 12vw;
    position: absolute;
  top: 0;
  left: 10rem;
    `}
  div {
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background: #6500e0;
  }

  p {
    font-family: "regular";
    letter-spacing: -0.08rem;
    font-size: 0.8rem;
  }
`;

const Container2 = styled.div`
  background: #f1e6ff;
  border-radius: 8px;
  padding: 0.2rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 1rem;
  right: 0;
  ${media.lessThan("medium")`
    width: 33vw;
    `}

  ${media.greaterThan("medium")`
    width: 12vw;
    top: 0;
  right: 7rem;
    `}
  div {
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background: #6500e0;
  }

  p {
    font-family: "regular";
    letter-spacing: -0.08rem;
    font-size: 0.8rem;
  }
`;

const Container3 = styled.div`
  background: #f1e6ff;
  border-radius: 8px;
  padding: 0.2rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 3rem;
  left: 0;
  ${media.lessThan("medium")`
    width: 33vw;
    `}

  ${media.greaterThan("medium")`
    width: 12vw;
    left: 8rem;
    `}
  div {
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background: #6500e0;
  }

  p {
    font-family: "regular";
    letter-spacing: -0.08rem;
    font-size: 0.8rem;
  }
`;

const Container4 = styled.div`
  background: #f1e6ff;
  border-radius: 8px;
  padding: 0.2rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 2rem;
  right: 0;
  ${media.lessThan("medium")`
    width: 33vw;
    `}

  ${media.greaterThan("medium")`
    width: 12vw;
    right: 6rem;
    `}
  div {
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background: #6500e0;
  }

  p {
    font-family: "regular";
    letter-spacing: -0.08rem;
    font-size: 0.8rem;
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  img {
    ${media.lessThan("medium")`
    width: 75vw;
    `}
  }
`;
const BigWoman = () => {
  return (
    <Fragment>
      <Wrapper>
        <Image>
          <img src={woman} alt="" />
        </Image>
        <Container1>
          <div></div>
          <p>Instant Settlements</p>
        </Container1>
        <Container2>
          <div></div>
          <p>Earn Huge Commissions</p>
        </Container2>
        <Container3>
          <div></div>
          <p>Top Quality Service</p>
        </Container3>
        <Container4>
          <div></div>
          <p>Dedicated Mobile App</p>
        </Container4>
      </Wrapper>
    </Fragment>
  );
};

export default BigWoman;
