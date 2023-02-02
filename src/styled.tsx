import styled from "styled-components";
export const Navigation = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  height: 65px;
  width: 47.5%;
  padding: 20px;
  margin: 20px;
`;

export const Title = styled.div`
  font-size: 1.75rem;
`;

export const Day = styled.div`
display: flex;
align-items: flex-start;
margin: 10px;
font-size: 1.25rem;
`;

export const Project = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  margin-left: auto;
`;

export const Image = styled.img`
  height: 100px;
`;

export const Input = styled.form`
  display: flex;
  width: 47.5%;
  position: relative;
  align-items: center;
`;

export const Button = styled.button`
    position: absolute;
    width: 50px;
    height: 50px;
    margin: 12px;
    border-radius: 50px;
    right: 0px;
    border: none;
    font-size: 15px;
    background-color: #2f74c0;
    color: white;
    transition: 0.2s all;
    box-shadow: 0 0 10px black;

    &:hover{
        background-color: #388ae2;
    }

    &:active{
        transform: scale(0.8);
    box-shadow: 0 0 5px black;
    }
`;

export const Box = styled.input`
  width: 100%;
  border-radius: 50px;
  padding: 20px 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 25px;
  border: none;
  transition: 0.2s;
  box-shadow: inset 0 0 5px black;

  &:focus {
  box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.5);
  outline: none;
}
`;

export const Single = styled.form`
  display: flex;
  border-radius: 5px;
  padding: 20px;
  margin-top: 15px;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 5px black;
    transform: scale(1.03);
  }
`;

export const InputSingleText = styled.input`
  flex: 1;
  padding: 5px;
  border: none;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

export const SingleText = styled.span`
  flex: 1;
  padding: 5px;
  border: none;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

export const SingleTextStriked = styled.s`
  flex: 1;
  padding: 5px;
  border: none;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

export const Icon = styled.span`
  margin-left: 10px;
  font-size: 25px;
  cursor: pointer;
`;

export const Todos = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 47.5%;
  padding: 15px;
`;

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  font-family: "Montserrat", sans-serif;
`;