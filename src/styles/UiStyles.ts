import styled from "styled-components";

export const Container = styled.div`
    max-width : 1200px;
    width : 100%;
    margin : auto;
`

export const HeaderWrapper = styled.header`
    padding : 7px 12px;
    background-color : ${props => props.theme.colors.second};
    display : flex;
    justify-content : space-between;
    align-items :center;
    color : white;
`

export const AuthBtn = styled.button`
    font-size : 18px;
    font-weight : bold;
    background-color:transparent;
    width : ${props => props.theme.size.lg};
    padding : 6px 8px;
    outline : none;
    border : 2px solid black;
    cursor : pointer;
    color : white;
    &:hover{
        color : black;
        border-radius: 12px;
        transition :  0.6s ease-out;
    }
`

export const LogOutBtn = styled(AuthBtn)`
    background-color: ${props => props.theme.colors.third};
`

