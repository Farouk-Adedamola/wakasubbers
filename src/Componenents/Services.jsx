import { Fragment } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import BsArrowRightShort from "react-icons/bs";
import { Service } from "./data";

const Section = styled.section`
  ${media.greaterThan("medium")`

`}
`;
const Services = () => {
  return (
    <Fragment>
      <Section>
        {Service.map((each) => {
          const { id, text } = each;
          return (
            <div key={id}>
              <p>{text}</p>
              <div>
                <p>explore features</p>
                <BsArrowRightShort />
              </div>
            </div>
          );
        })}
      </Section>
    </Fragment>
  );
};

export default Services;
