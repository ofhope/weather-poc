import styled from "styled-components";

export const Button = styled.button`
  font-size: 1em;
  text-align: center;
  border: 1px solid #FFF;
  background: rgb(89,92,102);
  background: linear-gradient(270deg, rgba(89,92,102,1) 0%, rgba(89,92,102,1) 44%, rgba(115,118,127,1) 100%);
  border-radius: 0 10px 10px 0;
  padding: 10px;
  cursor: pointer;
  color: #FFF;
  height: 46px;

  &:hover {
    background: #495ABF;
  }
`;