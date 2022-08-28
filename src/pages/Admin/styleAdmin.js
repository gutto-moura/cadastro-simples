import styled from "styled-components";

export const ContainerAdmin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    section{
        display: none;
        flex-direction: column;
        width: 90%;
        margin-top: 50px;
        justify-content: center;

        ul{
            width: 100%;
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            background-color: #fff;
            padding: 10px;
            border-radius: 10px;
            border: 1px solid #CCC;
            box-shadow: 0 0 .3em #ccc;

            li{
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
                flex-wrap: wrap;
                font-size: 17px;

                span{
                    color: #76777c;
                    
                }
                button{
                    display: flex;
                    border: none;
                    background-color: transparent;
                    align-items: center;
                    padding: 10px;
                    margin: 0 auto;
                }
            }
        }
    }
    h1{
        margin-bottom: 50px;
        margin-top: 30px;
        font-size: 50px;
        color: 	#8B008B;

        @media(max-width: 965px) {
            text-align: center;
        }
    }
    table{
        border:1px solid #CCC;
        border-collapse: collapse;
        margin: 0;
        padding: 0;
        width: 90%;
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
        @media(max-width: 965px) {
            display: none;
        }
    }
    @media(max-width: 965px) {
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
        padding-left: 30px;
        padding-right: 30px;
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
    @media(max-width: 625px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        button{
            width: 200px;
           justify-content: center;
           margin-bottom: 20px;
           margin-top: 20px;
        }
        h2{
            font-size: 30px;
        }
    }
`;