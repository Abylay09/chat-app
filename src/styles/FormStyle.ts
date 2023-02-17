import styled, { keyframes } from "styled-components";

export const Form = styled.form`
    width : 30%;
    margin : 50% auto 0;
    transform : translateY(-50%);
    height : auto;
`

export const Input = styled.input`
    width : 100%;
    margin : 12px 0 0 0;
`

export const Label = styled.label`
    font-size : 18px;
    font-weight : 500;
`


export const Button = styled.button`

`

const appear = keyframes`
  from {
    opacity : 0;
  }

  to {
    opacity : 1;
  }
`;

export const ErrorMsg = styled.p`
    margin : 8px 0  ;
    color : red;
    animation: ${appear} 0.6s linear infinite;
    animation-iteration-count : 1;
`

