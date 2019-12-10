import styled from "styled-components";

export const Container = styled.aside`
  background: #202225;
  padding: 20px 10px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.button`
  border: 0;
  background: transparent;
  margin: 0 0 8px;

  img {
    transition: all 0.2s;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  &:hover img {
    border-radius: 30%;
  }
`;

export const Logout = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 1px dashed #e04848;
  background: transparent;
  color: #e04848;
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    border-color: #a43d3d;
  }
`;
