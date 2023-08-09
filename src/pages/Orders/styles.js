import styled from 'styled-components';

const GeneralContainer = styled.main `
    background-color: #0A0A10;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
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
    height: 101px;
    margin-bottom: 15px;

    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);

    padding: 15px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 117px;

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);


    p {
        color: #FFF;
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
    }
`

export {GeneralContainer, ContainerItems, Label, Input, Order}