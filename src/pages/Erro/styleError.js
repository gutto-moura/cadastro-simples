import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerError = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h1{
        margin-top: 50px;
        font-size: 70px;
        margin-bottom: 30px;
    }
    h2{
        font-size: 50px;
        margin-bottom: 30px;
    }

`;
export const BotaoCadastro = styled(Link)`
        display: flex;
        align-items: center;
        padding: 10px;
        font-weight: bold;
        border-radius: 8px;
        border: none;
        background-color: #0886ff;
        color: #fff;
        text-decoration: none;
        margin-top: 50px;
`;