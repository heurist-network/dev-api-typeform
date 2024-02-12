import React from 'react';
import { SectionWrapper, Text } from './styled';
import { ButtonComp } from 'app/form-builder/form-components';

const StyledTextWithLinks = ({ htmlContent }) => (
  <Text dangerouslySetInnerHTML={{ __html: htmlContent }} />
);

const Section = ({ content, onNextStep, hideNextButton }) => {
  return (
    <SectionWrapper>
      {content.map((item, index) => (
        // Assuming item.value contains HTML string with links
        <StyledTextWithLinks key={index} htmlContent={item.value} />
      ))}

      {!hideNextButton &&
        <ButtonComp onClick={onNextStep}>Sure</ButtonComp>
      }
    </SectionWrapper>
  );
};

export default Section;
