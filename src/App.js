import styled from "styled-components";
import { SidePanel, MainPanel } from './wrappers';

function App() {

  return (
    <Wrapper className="app-container">
      <SidePanel children={<SidePanel />}/>
      <MainPanel />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: var(--side-panel-width) 1fr;
  grid-template-rows: 1fr;

  @media screen and (max-width: 730px){
    grid-template-columns: 1fr;
  }
`

export default App;
