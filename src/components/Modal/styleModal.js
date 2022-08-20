import styled from "styled-components";

export const ContainerModal = styled.div`
    font-family: inherit;

`;

export const InputSenha = styled.input`
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 20px;
    border-radius: 7px;
    border: none;
    box-shadow: inset 0 0 .5em #ccc;
    border: 2px solid #ccc;
    text-align: center;


`
export const BotaoEntrar = styled.button`
    padding: 10px;
    font-weight: bold;
    font-size: 17px;
    border: none;
    background-color: #4B0082;
    border-radius: 10px;
    color: #fff;

    :hover{
        cursor: pointer;
        border: 2px solid #4B0082;
        background-color: transparent;
        color: #4B0082;
        transition: 1s;
    }
`;