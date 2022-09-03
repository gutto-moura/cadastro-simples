import styled from "styled-components";

export const ContainerCadastro = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 50px;
    margin-top: 30px;

    h1{
        font-size: 60px;
        color: 	#8B008B;

        @media(max-width: 480px) {
            font-size: 50px;
            text-align: center;
        }
    }

`;
export const Admin = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 1px solid #D8BFD8;
    background-color: #DA70D6;
    padding: 6px;
    border-radius: 7px;
    text-decoration: none;
    color: #fff;
    margin-bottom: 30px;;

    span{
        font-size: 18px;
        margin-left: 10px;
    }
`;
export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 1em #eee;

    input{
        margin-bottom: 20px;
        width: 400px;
        height: 40px;
        border-radius: 20px;
        border: none;
        background-color: #FFF0F5;
        box-shadow: inset 0 0 1em #eee;
        padding: 20px;

        ::placeholder{
            font-weight: bold;
        }
        @media(max-width: 515px) {
            width: 100%;
        }
    }

    button{
        padding: 10px;
        font-weight: bold;
        font-size: 17px;
        border: none;
        background-color: #4B0082;
        border-radius: 10px;
        color: #fff;
        width: inherit;

        :hover{
            cursor: pointer;
            border: 2px solid #4B0082;
            background-color: transparent;
            color: #4B0082;
            transition: 1s;
        }
    }

    @media(max-width: 515px) {
            width: 90%;
        }
`;