import { useState } from 'react'
import styled, { ThemeProvider } from "styled-components"
import { Menu } from "./components/Menu"
import { Navbar } from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import "./main.css"

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.backGround};
`;

const Wrapper = styled.div`

`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode? darkTheme : lightTheme}>
      <Container>
        <Menu setDarkMode={ setDarkMode } />
        <Main>
          <Navbar />
          <Wrapper>
            Video cards
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  )
}

export default App
