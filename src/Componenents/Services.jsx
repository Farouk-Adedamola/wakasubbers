import { Fragment } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import arrow from "../assets/arrow.svg";
import { ServiceData } from "./data";
import { Validity } from "./data";

const Section = styled.section`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  //   flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;

  ${media.greaterThan("medium")`
  padding: 0 3rem;
  `}

  ${media.lessThan("medium")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  place-items: center;
  `}
`;

const Container = styled.div`
  border-radius: 0.5rem;
  padding: 0.8rem 1rem 0.6rem 0.8rem;

  ${media.greaterThan("medium")`
  padding: 1.2rem 1.1rem .5rem 1.1rem;
  `}

  ${media.greaterThan("large")`
  width: 17vw;
  `}

  ${media.lessThan("medium")`
  width: 34vw;
  `}

  p {
    font-family: "regular";
    text-transform: capitalize;
    letter-spacing: -0.09rem;
    font-size: 0.9rem;
    color: #191716;
    font-weight: 900;
    ${media.greaterThan("medium")`
    font-size: 1.1rem;
  `}
    ${media.greaterThan("large")`
    font-size: 1.5rem;
  `}
  }
`;

const Linked = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    font-size: 0.8rem;
    color: #000;
    ${media.lessThan("medium")`
    font-size: .6rem;
  `}
  }

  img {
    width: 15px;
    margin-left: 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin: 2rem 0;
  justify-content: center;
  align-items: center;

  ${media.greaterThan("medium")`
  display: none;
  `}

  button {
    background: none;
    border: none;
    padding: 0.8rem 1rem;
    outline: none;

    a {
      text-decoration: none;
      font-family: "regular";
      font-size: 1.2rem;
      color: #000;
      font-weight: 900;
      letter-spacing: -0.08rem;
    }
  }

  button:last-child {
    background: #6500e0;
    border-radius: 8px;
    transition: all 0.6s;
    border: none;
    outline: none;
    a {
      color: #fff;
    }
    &:hover {
      background: #fff;

      a {
        color: #6500e0;
      }
    }
  }
`;

const Trust = styled.div`
  display: flex;
  justify-content: space-evenly;
  //   flex-direction: column;
  align-items: center;
  margin: 2rem 0;

  ${media.lessThan("medium")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  place-items: center;
  `}

  div {
    p {
      font-family: "regular";
      text-transform: capitalize;
      text-align: center;
      font-weight: 900;
    }

    p:first-child {
      color: #16054e;
      ${media.greaterThan("medium")`
        font-size: 2rem;
        margin-bottom: .7rem;
        color: #16054e;
        `}
    }

    p:last-child {
      color: #6500e0;
      font-size: 0.9rem;
      ${media.greaterThan("medium")`
        font-size: .8rem;
        color: #16054e;
        margin-top: 0;
        `}
      ${media.lessThan("small")`
  font-size: .6rem;
    `}
    }
  }
`;
const Services = () => {
  return (
    <Fragment>
      <Section>
        {ServiceData.map((each) => {
          const { id, text, CSS } = each;
          return (
            <Container key={id} style={CSS}>
              <p>{text}</p>
              <Linked>
                <p>explore features</p>
                <img src={arrow} alt="arrow" />
              </Linked>
            </Container>
          );
        })}
      </Section>
      <Wrapper>
        <button>
          <a href="https://app.wakasub.com/register">Register</a>
        </button>
        <button>
          <a href="https://app.wakasub.com/login">Sign in</a>
        </button>
      </Wrapper>
      <Trust>
        {Validity.map((each) => {
          const { id, head, text } = each;
          return (
            <div key={id}>
              <p>{head}</p>
              <p>{text}</p>
            </div>
          );
        })}
      </Trust>
    </Fragment>
  );
};

export default Services;
