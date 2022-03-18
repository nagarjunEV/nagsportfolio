import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  HeaderFive,
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({
          id,
          title,
          description,
          tags,
          experience,
          company,
          role,
          responsibilities,
          source,
          visit,
        }) => (
          <BlogCard key={id}>
            <TitleContent>
              <HeaderThree title="true">{title}</HeaderThree>
              <HeaderFive title="true"> {role}</HeaderFive>
            </TitleContent>
            <Hr />
            <HeaderFive title="true"> {experience}</HeaderFive>
            <HeaderFive> {company}</HeaderFive>
            <Hr />
            <CardInfo>{responsibilities}</CardInfo>
            <div style={{ marginTop: '1rem' }}>
              <TitleContent>Tech Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
