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
  img {
    ${media.lessThan("medium")`
    width: 30vw;
    `}
  }
`;

const VideoSection = styled.section`
  width: 80vw;
  margin: 2rem auto;
  border: 3px solid #6500e0;

  ${media.greaterThan("medium")`
  display: none;
  `}

  iframe {
    width: 100%;
    height: 350px;
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
        <VideoSection>
          <iframe
            src="https://www.youtube.com/embed/qiihhk1AISY?controls=0"
            title="YouTube video player"
            allow=" autoplay; clipboard-write; encrypted-media; picture-in-picture; "
          ></iframe>
        </VideoSection>
      </Section>
    </Fragment>
  );
};

export default Hero;
