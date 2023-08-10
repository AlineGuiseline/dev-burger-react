import styled from 'styled-components';

const GeneralContainer = styled.main `
    background-color: #0A0A10;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    min-height: 100vh;
`

const ContainerItems = styled.section `
    display: flex;
    flex-direction: column;
    
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

const Order = styled.li `
    width: 342px;
    padding: 17px 27px;
    margin-top: 10px;
    margin-bottom: 25px;

    background: rgba(255, 255, 255, 0.25);
    color: #FFFFFF;
    border-radius: 14px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        background: transparent;
        border: none;
        cursor: pointer;
    }
`

const TextArea = styled.div `
    display: flex;
    flex-direction: column;
    gap: 25px;

    p {
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
    }

    h2 {
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
    }
`
export {GeneralContainer, ContainerItems, Label, Input, Order, TextArea}