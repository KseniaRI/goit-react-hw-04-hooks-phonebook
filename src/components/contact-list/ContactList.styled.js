import styled from '@emotion/styled';

export const Contacts = styled.ul`
margin: 0 auto;
align-items: center;
width: 340px;
`;

export const Contact = styled.li`
display: flex;
justify-content:space-between;
margin-bottom: 16px;
font-size: 20px;
font-weight: 500;
`;
export const DeleteButton = styled.button`
height: 28px;
width: 60px;
background-color: #fff;
border-color: skyblue;
cursor: pointer;
outline: none;
border-radius: 5px;
color: #000;

&:hover,
&:focus{
    background-color: skyblue;
    color: #fff;
}
`;

export const Tel = styled.span`
font-weight: 400;
`;