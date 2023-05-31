import { Fragment } from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Wrapper = styled.div`
  background: #fafafa;
  padding: 2rem 0 1rem 0;
  margin-top: 2.5rem;
`;

const Foot = styled.div`
  p:first-child {
    text-align: center;
    font-family: "SFMedium";
    color: #000;

    ${media.lessThan("small")`
    font-size: .9rem;
    `}

    a {
      text-decoration: none;
      color: #6500e0;
    }

    span {
      color: #6500e0;
    }
  }

  p:last-child {
    font-size: 1.2rem;
    font-family: SFBlack;
    text-align: center;
    ${media.lessThan("small")`
    font-size: 1rem;
    `}
  }
`;
const Footer = () => {
  return (
    <Fragment>
      <Wrapper>
        <Foot>
          <p>
            For feedback contact our live support on <a href="">whatsapp</a>{" "}
            <br /> or reach out through email at{" "}
            <span>support@wakasub.com </span>
          </p>

          <p>Wakasüb &copy; 2023</p>
        </Foot>
      </Wrapper>
    </Fragment>
  );
};

export default Footer;
