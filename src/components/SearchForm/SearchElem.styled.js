import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  max-width: 300px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 8px;
`;

export const Input = styled.input`
display: inline-block;
  width: 100%;
  font-size: 16px;
  padding: 4px;

  &::placeholder {
    font-size: 16px;
  }
`

export const IconBtn = styled.button`
  align-items: center;
  background-color: inherit;
  width: 30px;
  height: 30px;
  margin-right: 7px;
  margin-left: 4px;
  transition: all 250ms easy-out;
  cursor: pointer;
  border:none;

  &:hover {
    transform: scale(1.1);
  }

  &>svg{
    width:25px;
    height: 25px;
  }
`;
