import { Fragment } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import TypewriterComponent from "typewriter-effect";
import arrow from "../assets/arrow.svg";

const Wrapper = styled.div`
  margin: 1.5rem 0;
  ${media.greaterThan("medium")`
margin: 5rem 0 2rem 0;
`}

  h2 {
    font-size: 2.5rem;
    font-family: "SFMedium";
    text-align: center;
    margin-bottom: 0;

    ${media.greaterThan("medium")`
    font-size: 3.5rem;
`}

    span {
      color: #6500e0;
      font-weight: 900;
      font-family: "SFBlack";
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6rem;
    font-family: "regular";
    letter-spacing: -0.08rem;
    text-align: center;
    color: #191716;

    ${media.greaterThan("medium")`
width: 35rem;
margin: 0 auto;
    line-height: 1.9rem;
    `}
  }
`;

const Span = styled.h1`
  text-align: center;
  font-family: "SFMedium";
  font-size: 2.25rem;

  ${media.greaterThan("medium")`
    font-size: 3.5rem;
    margin-top: -.04rem;
`}
  span {
    color: #000;
    margin-top: 0;
  }
`;

const Explore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1rem;
    margin-right: 0.8rem;
    font-family: "regular";
    letter-spacing: -0.08rem;
    color: #718096;
  }

  img {
    width: 15px;
  }
`;
const Affiliate = () => {
  return (
    <Fragment>
      <Wrapper>
        <h2>
          Becoming A <span>Wakasüb</span>
        </h2>
        <Span>
          <span>
            <TypewriterComponent
              // className={classes.typewriter}
              // react typewriter using options
              options={{
                strings: ["Affiliated Agent", "Reseller Agent"],
                delay: 70,
                deleteSpeed: 70,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </Span>
        <p>
          Sure cashin and cashout, take advantage of our API and sell all our
          services from the comfort of your website. easy,fast and swift
          integration to set you up in no time.
        </p>
      </Wrapper>
      <Explore>
        <p>Explore more features</p>
        <img src={arrow} alt="" />
      </Explore>
    </Fragment>
  );
};

export default Affiliate;
