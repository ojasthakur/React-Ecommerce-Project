import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";
import myImg from "../assets/IMG20220320130412_sfw6it.jpg";
import myImg2 from "../assets/IMG_2844.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={myImg2} alt="about-image" />
        <article>
          <div className="title">
            <h2>My Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            From early childhood the thing that made me the most happy was
            bringing a smile to people's faces. T-mart is that childhood coming
            to fruition. T-marts commitment to provide world class products to
            every corner of the globe is what makes us stand out!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
