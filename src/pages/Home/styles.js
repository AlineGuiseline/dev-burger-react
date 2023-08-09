import styled from 'styled-components';

const GeneralContainer = styled.main `
    background-color: #0A0A10;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;

    img {
        margin-top: 20px;
    }
`

const ContainerItems = styled.section `
    margin-top: 40px;
    height: 100%;
`

const Label = styled.label `
    color: #EEE;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: -0.408px;
    margin-left: 15px;
`

const Input = styled.input `
    display: flex;
    width: 342px;
    padding: 19px 139px 18px 15px;
    align-items: center;
    border: none;
    outline: none;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    margin-bottom: 42px;

    color: #FFF;
    font-size: 18px;
`

export {GeneralContainer, ContainerItems, Label, Input}