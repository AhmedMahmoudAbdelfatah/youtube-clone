import { useState } from 'react'
import styled, { ThemeProvider } from "styled-components"
import { Menu } from "./components/Menu"
import { Navbar } from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import "./main.css"
import { Route, Routes } from 'react-router-dom';
import { Video } from './pages/Video';
import { Home } from './pages/Home';
import { Signin } from './pages/Signin';
import { Search } from './pages/Search';

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.hr};
`;

const Wrapper = styled.div`
  padding: 15px 20px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode? darkTheme : lightTheme}>
      <Container>
        <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path='/' element={<Home type="random"/>} />
              <Route path='/trend' element={<Home type="trend"/>} />
              <Route path='/sub' element={<Home type="sub"/>} />
              <Route path='/video/:id' element={<Video />} />
              <Route path='/signin' element={<Signin />} />
              <Route path='/search' element={<Search />} />
            </Routes>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  )
}

export default App
