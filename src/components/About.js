import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import DoneIcon from '@mui/icons-material/Done';

const StyledTypography = styled(Typography)`
  && {
    font-family: Arial, sans-serif;
    color: #808080;
    font-size: 24px;
    line-height: 1.4;
  }
`;

const Highlights = styled(Typography)`
  && {
    font-family: Arial, sans-serif;
    color: #2f4f4f;
    font-size: 24px;
  }
`;

const StyledDivider = styled(Divider)`
  && {
    margin: 15px 0px 15px 0px;
  }
`;

const StyledBox = styled.div`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledList = styled(List)`
  && {
    position: initial;
  }
`;

const StyledListItem = styled(ListItem)`
  && {
    position: initial;
  }
`;

const StyledListItemText = styled(ListItemText)`
  && {
    color: #808080;
  }
`;
const About = () => {
  const skills = [
    'Results Driven',
    'Deadline Conscious',
    'Problem Solver',
    'Critical Thinker',
  ];
  return (
    <>
      <StyledTypography variant="body">
        <Highlights variant="body">Hi! I&apos;m Siri Damineni</Highlights>
        <br />A Front End Developer currently based on toronto. I am passionate
        about creating interactive applications and experiences in web
      </StyledTypography>
      <StyledDivider variant="middle" />
      <Highlights>Why Work With Me?</Highlights>
      <StyledBox>
        <StyledList>
          {skills.map((item) => (
            <StyledListItem key={item}>
              <ListItemIcon>
                <DoneIcon variant="small" />
              </ListItemIcon>
              <StyledListItemText primary={item} />
            </StyledListItem>
          ))}
        </StyledList>
      </StyledBox>
    </>
  );
};

export default About;
