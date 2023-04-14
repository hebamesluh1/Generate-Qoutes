import styled from "styled-components";


export const Box = styled.div`
  background:#fcfdff24;
  text-align: center;
  border-radius: 10px;
  padding: 2rem;
  width: 40%;
  margin: 15% ;
  color:#ffdb48;
  h3{
    padding:20px 0;
    text-transform:uppercase;
  }
  @media(max-width:900px){
    width:80%;
    margin:50% auto;
  }
`;
export const Btn = styled.button`
  padding: 5px;
  border-radius:50%;
  width:50px;
  height:50px;
  border: 1px solid transparent;
  font-size:20px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #999;
    color: #fff;
    cursor: pointer;
  }
`;
export const Error = styled.div`
  color: #f00;
  font-size: 20px;
`;
export const Flex = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding-top: 1.5rem;
  align-items: center;
`;
