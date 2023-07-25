import React, { useRef } from 'react';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { Avatar, Typography } from '@mui/material';
import Profile from '../shared/Icons/images/profile.jpg';

const StyledAppbar = styled(AppBar)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 20px 50px 0px 0px;
    transition: none;
    box-shadow: none;
    background-color: lightgray;
  }
`;

const StyledButton = styled(Button)`
  && {
    color: black;
  }
`;

const StyledAvatar = styled(Avatar)`
  && {
    height: 100px;
    width: 100px;
    margin: 50px 0px 10px 40px;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: lightgray;
  padding: 10px;
`;

const MainWrapper = styled.div`
  padding: 20px;
`;

const Container = styled.div`
  min-height: 600px;
`;

const DrawerAppBar = () => {
  const about = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);
  const ScrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // const navItems = [
  //   { text: 'About', ref: about },
  //   { text: 'Projects', ref: project },
  //   { text: "Let's get in Touch", ref: contact },
  // ];

  return (
    <>
      <Header>
        <StyledAppbar component="nav">
          <StyledButton
            key="about"
            sx={{ color: '#fff' }}
            onClick={() => ScrollToSection(about)}
          >
            <Typography variant="h6">About</Typography>
          </StyledButton>
          <StyledButton
            key="project"
            sx={{ color: '#fff' }}
            onClick={() => ScrollToSection(project)}
          >
            <Typography variant="h6">Projects</Typography>
          </StyledButton>
          <StyledButton
            key="about"
            sx={{ color: '#fff' }}
            onClick={() => ScrollToSection(contact)}
          >
            <Typography variant="h6">Let Get In Contact</Typography>
          </StyledButton>
          {/* {navItems.map((item) => (
            <StyledButton
              key={item.ref}
              sx={{ color: '#fff' }}
              onClick={() => ScrollToSection(item.ref)}
            >
              {item.text}
            </StyledButton>
          ))} */}
        </StyledAppbar>
        <StyledAvatar src={Profile} />
      </Header>
      <MainWrapper>
        <Container>
          <Typography variant="h2" ref={about}>
            About
          </Typography>
        </Container>
        <Container>
          <Typography variant="h2" ref={project}>
            Projects
          </Typography>
        </Container>
        <Container>
          <Typography variant="h2" ref={contact}>
            Contact Me
          </Typography>
        </Container>
      </MainWrapper>
    </>
  );
};

export default DrawerAppBar;
