import './App.css';
import styled from 'styled-components'
import RightContainer from './components/RightContainer'
import LeftContainer from './components/LeftContainer'

const Wrapper = styled.div`
  display: flex;
`

function App() {
  return (
    <Wrapper>
      <LeftContainer />
      <RightContainer />
    </Wrapper>
  );
}

export default App;
