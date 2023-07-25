import React from 'react';
import styled from 'styled-components';
import { LinkedIn } from '../shared/Icons/LinkedIn';
import Mail from '../shared/Icons/Mail';
import { IconButton, Typography } from '@mui/material';

const FooterWrapper = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2;
`;

const ContactText = styled(Typography)`
  && {
    color: #808080;
  }
`;

const IconsContainer = styled.div`
  min-height: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <ContactText variant="body1"> Contact Me</ContactText>
      <IconsContainer>
        <IconButton href="https://www.linkedin.com/in/siri-damineni-1268ba1a7/">
          <LinkedIn />
        </IconButton>
        <IconButton href="mailto:siri.damineni@gmail.com">
          <Mail />
        </IconButton>
      </IconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
