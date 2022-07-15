import styled from '@emotion/styled';
import { Form } from 'formik';

export const StyledField = styled.input`
width: 300px;
height: 32px;

&:hover,
&:focus{
    outline-color: skyblue;
}
`;

export const StyledForm = styled(Form)`
margin: 0 auto;
display: flex;
flex-direction: column;
width: 320px;
height: 350px;
padding: 10px;
border: 2px solid skyblue;
border-radius: 5px;
margin-bottom: 40px;
`;
export const Label = styled.label`
margin-bottom: 12px;
color: #000;
font-weight: 500px;
font-size: 20px;
margin-top: 28px;
`;
export const Button = styled.button`
width: 120px;
height: 40px;
margin: 0 auto;
margin-top: 28px;
border-color: skyblue;
background-color: #fff;
cursor: pointer;
outline: none;
border-radius: 5px;
font-size: 16px;
color: #000;
font-weight: 500;

&:hover,
&:focus{
    background-color: skyblue;
    color: #fff;
}
`;

export const ErrorMessage = styled.div`
color: red;
font-style: italic;
`