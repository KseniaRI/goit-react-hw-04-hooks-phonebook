import styled from '@emotion/styled';

export const FilterTitle = styled.label`
font-size: 20px;
font-weight: 500;
margin-bottom: 16px;
color: #000;
`;
export const FilterWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
export const FilterInput = styled.input`
width: 300px;
height: 32px;
margin-bottom: 28px;

&:hover,
&:focus{
    outline-color: skyblue;
}
`;