import React from 'react';
import {
  DiDatabase,
  DiEclipse,
  DiFirebase,
  DiJava,
  DiReact,
  DiZend,
  DiAws,
} from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id="technologies">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      {/* I have worked as Full Stack Web developer for 3+ years. */}
      <br />
      My professional experience has given me the ability to solve intriguing
      real-world problems at an industrial scale.
    </SectionText>
    <List>
      <ListItem>
        <DiAws size="3rem" />
        <ListContainer>
          <ListTitle>AWS</ListTitle>
          <ListParagraph>EC2, Lambda, S3</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            {/* Experience in <br /> */}
            React.js, Redux, and Angular 6
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            {/* Experience in <br /> */}
            Spring Boot and Express.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            {/* Experience in <br /> */}
            MySQL, PostgreSQL, Redis, and MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
