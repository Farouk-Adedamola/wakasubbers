import { Fragment } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import google from "../assets/googleplay.png";
import appstore from "../assets/appstore.png";
import TypewriterComponent from "typewriter-effect";

const Section = styled.section`
  ${media.greaterThan("large")`
`}
`;

const LeftHand = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "SFMedium";
    font-variant: Capitalize;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 0;
    color: #16054e;
    span {
      color: #6500e0;
    }

    ${media.greaterThan("medium")`
  font-size: 4rem;
`}

    ${media.greaterThan("large")`
  font-size: 5rem;
`}
  }
`;

const LeftHandImage = styled.div`
  margin-top: 1.5rem;
  img:last-child {
    margin-left: 1rem;
  }
`;
const Hero = () => {
  return (
    <Fragment>
      <Section>
        <LeftHand>
          <h1>
            High Availability <br />
            <span>
              <TypewriterComponent
                // className={classes.typewriter}
                // react typewriter using options
                options={{
                  strings: [
                    "Subscription Solution",
                    "Data Solution",
                    "Fast and Reliable",
                  ],
                  delay: 70,
                  deleteSpeed: 70,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          {/* typewriter effect */}
          <LeftHandImage>
            <img src={google} alt="" />
            <img src={appstore} alt="" />
          </LeftHandImage>
        </LeftHand>
      </Section>
    </Fragment>
  );
};

export default Hero;
