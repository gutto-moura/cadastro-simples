import styled from "styled-components";

export const ContainerAdmin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    section{
        display: none;
        display: flex;
        flex-direction: column;
        width: 80%;

        article{
            width: 100%;
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
        }
    }
    h1{
        margin-bottom: 50px;
        margin-top: 30px;
        font-size: 50px;
        color: 	#8B008B;
    }
    table{
        border:1px solid #CCC;
        border-collapse: collapse;
        margin: 0;
        padding: 0;
        width: 80%;
        table-layout: fixed;
        margin-top: 30px;

        caption{
            font-size: 1.7em;
            margin: .5em 0 .75em;
        }
        tr{
            background-color: #fff;
            border: 1px solid #ddd;
            padding: .35em;
        }
        th,
        td{
            padding: .62em;
            text-align: center;
        }
        th{
            font-size: .85em;
            letter-spacing: .1em;
            text-transform: uppercase;
            background-color: #ADD8E6;
        }
        button{
            background-color: transparent;
            border: none;
        }
    }
    @media(max-width: 769px) {
        section{
            display: flex;
        }

}
`;
export const InformationAdmin = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
    
    h2{
        font-size: 25px;
    }
    button{
        display: flex;
        align-items: center;
        padding: 6px;
        font-weight: bold;
        border-radius: 8px;
        border: none;
        background-color: #0886ff;
        color: #fff;


        span{
            padding-left: 10px;
        }
    }
`;