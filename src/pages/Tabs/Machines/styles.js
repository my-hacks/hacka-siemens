import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(234, 239, 251, 1);
  padding: 30px 20px;
  flex-direction: row;
`;

export const RightContainer = styled.View`
  width: 50%;
  height: 100%;
  background-color: blue;
  padding: 10px;
`;

export const LeftContainer = styled.View`
  width: 50%;
  height: 100%;
  background-color: lightcoral;
`;

export const BoxMachine = styled.View`
  height: 100px;
  /* width: 80%; */
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
  flex-direction: row;
  margin: 10px 0px;
`;

export const ImageMachine = styled.View`
  height: 100%;
  width: 20%;
  background-color: orange;
`;

export const NameMachine = styled.View`
  height: 100%;
  width: 50%;
  background-color: pink;
`;

export const StatusMachineGraph = styled.View`
  height: 100%;
  width: 30%;
  background-color: lightgray;
`;
