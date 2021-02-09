import styled from "styled-components";
import Features from "./Features";
import Tasks from "./Tasks";

const Container = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 300px auto;
    grid-column-gap: 30px;
  `;

function App() {
  return (
    <Container>
      <Features />
      <Tasks />
    </Container>
  );
}

export default App;
