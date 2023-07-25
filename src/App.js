import React, { useRef } from 'react';
import styled from 'styled-components';
import Profile from './components/Profile';
import About from './components/About';
import Footer from './components/Footer';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

const Wrapper = styled.div`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    font-family: Arial, sans-serif;
    overflow-x: hidden;
    box-sizing: border-box;
    &&::-webkit-scrollbar {
      width: 0;
    }
  }
`;

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
    &&.MuiPaper-root-MuiAppBar-root {
      position: none;
      z-index: none;
    }
  }
`;

const StyledButton = styled(Button)`
  && {
    color: black;
    font-family: sans-serif;
    font-style: normal;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: lightgray;
  position: fixed;
  top: 0;
  left: auto;
  right: 0%;
`;

const MainWrapper = styled.div`
  margin-top: 15%;
`;

const Container = styled.div`
  min-height: 500px;
  padding: 30px 100px;
  text-align: center;
`;

function App() {
  const about = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);
  const ScrollToSection = (elementRef) => {
    return elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { text: 'About', ref: about },
    { text: 'Projects', ref: project },
    { text: 'Contact', ref: contact },
  ];

  return (
    <Wrapper>
      <Header>
        <StyledAppbar component="nav">
          {navItems.map((item) => (
            <StyledButton
              key={item.ref}
              sx={{ color: '#fff' }}
              onClick={() => ScrollToSection(item.ref)}
            >
              {item.text}
            </StyledButton>
          ))}
        </StyledAppbar>
        <Profile />
      </Header>
      <MainWrapper>
        <Container ref={about}>
          <About />
        </Container>
        <Container ref={project} />
      </MainWrapper>
      <div ref={contact}></div>
      <Footer />
    </Wrapper>
  );
}

export default App;
