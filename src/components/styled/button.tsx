import styled from "styled-components";

const StyledButton = styled.button`
    position: absolute;
    width: 50px;
    height: 50px;
    margin: 12px;
    border-radius: 50px;
    right: 0px;
    border: none;
    font-size: 15px;
    background-color: #2f74c0;
    color: white;
    transition: 0.2s all;
    box-shadow: 0 0 10px black;

    &:hover{
        background-color: #388ae2;
    }

    &:active{
        transform: scale(0.8);
    box-shadow: 0 0 5px black;
    }
`;

const Button = () => {
    return <StyledButton>+</StyledButton>;
};

export default Button;