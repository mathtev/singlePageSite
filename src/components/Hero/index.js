import React from 'react';
import { HeroBtn, HeroContainer, HeroH1, HeroImg, HeroP, LeftSection } from './HeroElements';

import heroImg from '../../assets/images/hero img.svg';

const Hero = () => {
  return (
    <HeroContainer>
      <LeftSection>
        <HeroH1>Check your well-being</HeroH1>
        <HeroP>
          We’re sure that deciding to check on your health is a big step, even
          if it doesn’t bother in any way.{' '}
        </HeroP>
        <HeroBtn>Get Started</HeroBtn>
      </LeftSection>
      <HeroImg src={heroImg} alt="hero" />
    </HeroContainer>
  );
};

export default Hero;
