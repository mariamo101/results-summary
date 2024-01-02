import styled from "styled-components"

export default function Main(){
    const MainContainer = styled.section`
    height: 100vh;
    display:flex;
    background: rgba(255, 255, 255, 1);

        
    `;
    const Summary = styled.p`
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
    color: rgba(48, 59, 89, 1);
    display: inline-block;   
    `;


    return(
       <MainContainer>
        <Summary/>
       </MainContainer>
    )
}