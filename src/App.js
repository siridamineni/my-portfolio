import styled from 'styled-components';
import Header from '../../my-portfolio/src/components/Header';
import Main from '../../my-portfolio/src/components/Main';
import Footer from '../../my-portfolio/src/components/Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
}

export default App;
