import styled from "styled-components";

const Box = styled.input`
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
`

const Boxx = (props:any) => {
    return <Box/>;
}
;

export default Boxx;