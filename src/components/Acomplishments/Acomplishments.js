import React from 'react';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  {
    number: 1,
    text: 'Star Performer “One Time Achievement” (EAA Rathna) award by Robert Bosch (RBEI/EAA)',
  },
  {
    number: 2,
    text: 'XCELERATOR NINJA - Certificate of Excellence for building a Weather Station using IoT.',
  },
  {
    number: 3,
    text: 'Placed second in “PAYSE ETHICAL HACKATHON” by M/s Nucleus Software Exports Ltd.',
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Acomplishments</SectionTitle>
    <Boxes style={{ paddingBottom: '2rem' }}>
      {data.map((str, index) => (
        <Box key={index}>
          <BoxText>{str.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
