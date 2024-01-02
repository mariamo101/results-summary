import { createGlobalStyle } from "styled-components"
import Header from "./components/header/Header"
import Main from "./components/main/Main"


function App() {
  const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    margin:0;
    background: rgba(236, 242, 255, 1);
    display:flex;
    align-items: center;
    flex-direction: column;
  }
`
  return (
    <>
      <GlobalStyle />
      <Header/>
     <Main/>  
    
    </>
  )
}

export default App
