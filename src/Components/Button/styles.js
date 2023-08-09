import styled from 'styled-components';

export const Button = styled.button `
    display: flex;
    width: 342px;
    height: 68px;
    padding: 0px 113px;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.isGray ? 'rgba(255, 255, 255, 0.14)' : '#D93856')};
    border: none;

    color: #FFF;
    font-size: 17px;
    font-weight: bold;

    margin-bottom: 30px;
    

    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        opacity: 0.7;
    }

    ${props => props.isGray && `
     margin-top: 85px;
  `}
`

