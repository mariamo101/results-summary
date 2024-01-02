import styled from "styled-components"
import score from '../images/score.svg'

export default function Header() {
    const HeaderContainer = styled.section`
    width: 375px;
    height: 356px;
    background: linear-gradient(180deg, #7755FF 0%, #6943FF 0.01%, #2F2CE9 100%);
    border-radius:0 0 32px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;
    const YourResult = styled.p`
    margin: 10px 0 15px 0;
    color: rgba(202, 201, 255, 1);
    font-family:sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0px;
    text-align: center;
    display: inline-block;
    `;
    const Great = styled.p`
    font-family:sans-serif;
    color:white;
    display: inline-block;
    font-size: 30px;
    margin:25px 0 0 0;
    `;
    const GreatP = styled(YourResult)`
     margin-top: 30px;
    `;
    return (
        <>
            <HeaderContainer>
                <YourResult> Your Result </YourResult>
                <img src={score} className="score" alt="score" />
                <Great> Great </Great>
                <GreatP> Your performance exceed 65% of the people conducting
                    the testhere!
                </GreatP>
            </HeaderContainer>
        </>
    )
}