import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  /* background-color: orange; */
  /* padding: 20px; */
`;

export const ContainerBoxes = styled.View`
  height: 100%;
  width: 100%;
  background-color: green;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const BoxChoice = styled.TouchableOpacity`
  height: 45%;
  width: 45%;
  background-color: #fff;
  border-radius: 10px;
  border-color: #cecece;
  border-width: 20px;
  margin: 15px;
  padding: 20px;
  align-content: center;
  justify-content: center;
`;
