import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  padding: 0 30%;

  @media only screen and (max-width: 600px) {
    padding: 0 5%;
  }

  @media only screen and (max-width: 900px) {
    padding: 0 8%;
  }

  @media only screen and (max-width: 1000px) {
    padding: 0 10%;
  }
`;

export const Title = styled.h5`
  color: #445fe8;
  font-size: 35px;
  margin-bottom: 60px;
`;

export const Input = styled.input`
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 9px;
  margin: 18px 0;
  width: 100%;
  box-sizing: border-box;
  color: #c8c9cf;
  font-size: 20px;
  outline: none;
`;

export const Button = styled.button`
  width: 50%;
  border: 0 none;
  border-radius: 9px;
  cursor: pointer;
  padding: 15px;
  margin: 18px 0;
  font-size: 20px;
  outline: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  @media only screen and (max-width: 900px) {
    width: 70%;
  }
`;

export const SignIn = styled(Button)`
  background: #445fe8;
  color: white;
`;

export const SignUp = styled(Button)`
  background: #875bff;
  color: white;
`;

export const ForgotPass = styled(Button)`
  background: white;
  color: #445fe8;

  a {
    color: #445fe8;
  }
`;
