import styled from 'styled-components';
import './App.css';
import Header from './components/Header/header';
import About from './components/About/about';
import Home from './components/Home/home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <FirstPage>
        
        <BlurCircle/>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </BrowserRouter>
        
      </FirstPage>
    </>
  );
}

export default App;
export const FirstPage=styled.div`
  position: relative;
  height: 100vh;
  /* width: 100vw; */
  background-color: black;
  /* z-index: 0; */
`

export const BlurCircle = styled.span`
  position: absolute;
  height: 70vh;
  width: 30vw;
  background-color: #5C4033;
  border-radius: 50%;
  display: inline-block;
  margin: 100px 50px;
  filter: blur(70px);
  opacity: 0.5;
  z-index: 0;
`