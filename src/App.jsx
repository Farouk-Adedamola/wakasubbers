import { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import DotLoader from "react-spinners/ClipLoader";
import Navigation from "./Componenents/Navigation";
import Hero from "./Componenents/Hero";
import Services from "./Componenents/Services";
import Affiliate from "./Componenents/Affiliate";
// import classes from "./"

const Wrapper = styled.div``;

const Container = styled.div`
  padding: 0 1rem 0 1rem;

  ${media.greaterThan("medium")`
  padding: 0 4rem 0 4rem;
  `}
  ${media.greaterThan("large")`
padding: 0 8rem 0 8rem;
`}
`;

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Fragment style={{ width: "100%" }}>
      {loading ? (
        <DotLoader
          color={"#6500e0"}
          loading={loading}
          size={40}
          cssOverride={{
            display: "block",
            margin: "40vh auto",
          }}
        />
      ) : (
        <Wrapper>
          <Navigation />
          <Hero />
          <Container>
            <Services />
            <Affiliate />
          </Container>
        </Wrapper>
      )}
    </Fragment>
  );
}

export default App;
