import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(234, 239, 251, 1);
  padding: 30px 20px;
  flex-direction: row;
`;

export const RightContainer = styled.View`
  width: 60%;
  height: 100%;
  /* background-color: blue; */
  padding: 10px;
  border-right-width: 0.5px;
  border-right-color: #000;
`;

export const LeftContainer = styled.View`
  width: 40%;
  height: 100%;
  /* background-color: lightcoral; */
  padding: 10px;
`;

export const BoxMachine = styled.View`
  height: 100px;
  /* width: 80%; */
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
  flex-direction: row;
  margin: 10px 0px;
  border-width: 1px;
  border-color: #cecece;
`;

export const ImageMachine = styled.View`
  height: 100%;
  width: 20%;
  background-color: rgb(229, 229, 229);
  align-items: center;
  justify-content: center;
  border-right-color: #cecece;
  border-right-width: 1px;
`;

export const NameMachine = styled.View`
  height: 100%;
  width: 50%;
  /* background-color: pink; */
  align-items: center;
  justify-content: center;
`;

export const TextMachine = styled.Text`
  font-size: 16;
  font-weight: 300;
`;

export const StatusMachineGraph = styled.View`
  height: 100%;
  width: 30%;
  background-color: lightgray;
`;

export const BoxChart = styled.View`
  height: 150px;
`;
