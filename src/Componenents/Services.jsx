import { Fragment } from "react";
import styled from "styled-components";
import media from "styled-media-query";
// import BsArrowRightShort from "react-icons/bs";
import { ServiceData } from "./data";

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

  p {
    font-family: "regular";
    text-transform: capitalize;
    letter-spacing: -0.08rem;
    font-size: 1.1rem;
    color: #191716;
    ${media.greaterThan("medium")`
    // font-size: 1.4rem;
  `}
    ${media.greaterThan("large")`
    // font-size: 1.7rem;
  `}
  }
`;

const Linked = styled.div`
  p {
    font-size: 1rem;
    color: #000000;
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
                {/* <BsArrowRightShort /> */}
              </Linked>
            </Container>
          );
        })}
      </Section>
    </Fragment>
  );
};

export default Services;
