import React from 'react';
import Link from 'next/link';

import {
  Section,
  SectionSubText,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm Nagarjun
        <br />
        Enumudi Venkatesha!
      </SectionTitle>
      <SectionText>
        Full Stack Web Developer with 3+ Years of Industry Experience: Committed
        on delivering High-Quality Solutions for Web Applications
        <br />
        My expertise lies in
        <br />
        React.js, Redux JavaScript libraries
        <br />
        Spring Boot, Express.js for backend
        <br />
        Python, Pyspark, AWS, Docker and
        <br />
        PostgreSQL, MySQL, Redis and MongoDB for Databases. <br />
        {/* He always writes efficient and reusable code. */}
      </SectionText>
      {/* <Button></Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
