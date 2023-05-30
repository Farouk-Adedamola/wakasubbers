import { Fragment } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import wakasub from "../assets/wakasubLogo.png";

const Section = styled.section`
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.greaterThan("medium")`
  padding: 0 4rem 0 4rem;
  `}
  ${media.greaterThan("large")`
padding: 0 8rem 0 8rem;
`}
`;

const LogoWrapper = styled.div`
  img {
    width: 120px;
    height: 100px;
    ${media.lessThan("medium")`
  display: none;
  // width: 50px;
  // height: 45px;
  `}
  }

  p {
    ${media.lessThan("medium")`
  font-size: 1.3rem;
  font-family: "SFBlack";
  color: #6500e0;

  `}
    ${media.greaterThan("medium")`
  display: none;
  `}
  }
`;

const LinksWrapper = styled.div`
  button {
    background: none;
    border: none;
    outline: none;

    a {
      text-decoration: none;
      font-family: "regular";
      font-size: 1rem;
      letter-spacing: -0.07rem;
      color: #000000;
      font-weight: bold;

      ${media.lessThan("small")`
  font-size: .6rem;
  `}
    }
  }

  button:last-child {
    background: #6500e0;
    padding: 0.6rem;
    border-radius: 0.5rem;
    ${media.lessThan("small")`
  padding: .4rem;
  `}
    ${media.greaterThan("medium")`
    margin-left: .8rem;
    `}
    ${media.greaterThan("large")`
    margin-left: 1.2rem;
    `}
    a {
      color: #fff;
    }
  }
`;
const Navigation = () => {
  return (
    <Fragment>
      <Section>
        <Container>
          <LogoWrapper>
            <img src={wakasub} alt="wakasub" />
            <p>Wakasüb</p>
          </LogoWrapper>
          <LinksWrapper>
            <button>
              <a href="https://app.wakasub.com/login">
                Sign in to your account
              </a>
            </button>
            <button>
              <a href="https://app.wakasub.com/register">Sign up</a>
            </button>
          </LinksWrapper>
        </Container>
      </Section>
    </Fragment>
  );
};

export default Navigation;
