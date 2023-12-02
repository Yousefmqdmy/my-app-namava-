import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    .vip-co {
        width: 166.24px;
        height: 351px;
        border-radius: 10px;
        text-decoration:none;
    }
    .vip-pic{
        width: 100%;
        height: 244px;
        border-radius: 10px;
        border: none;        
        margin: 15px 0 16px;
    }
    .v-pic {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    h4 {
        float: right;
    }
`
export const CoBox = styled.div`
    width: 14%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    `

