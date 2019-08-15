import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: rgba(234, 239, 251, 1);
  padding: 30px 20px;
`;

export const Title = styled.Text`
  font-size: 25;
  font-weight: bold;
`;

export const LineMachine = styled.View`
  height: 60px;
  width: 100%;
  border-radius: 20px;
  background-color: #fff;
  margin: 10px 0px;
  border-width: 1px;
  border-color: #cecece;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
`;

export const TitleLine = styled.Text`
  font-size: 20;
  font-weight: bold;
`;

export const StatusMachineSuccess = styled.View`
  width: 2%;
  height: 100%;
  background-color: rgba(80, 213, 188, 1);
  border-top-right-radius: 20;
  border-bottom-right-radius: 20;
  border-width: 1px;
  border-color: #cecece;
`;

export const StatusMachineAlert = styled.View`
  width: 2%;
  height: 100%;
  background-color: yellow;
  border-top-right-radius: 20;
  border-bottom-right-radius: 20;
  border-width: 1px;
  border-color: #cecece;
`;

export const StatusMachineDanger = styled.View`
  width: 2%;
  height: 100%;
  background-color: rgba(255, 112, 1, 1);
  border-top-right-radius: 20;
  border-bottom-right-radius: 20;
  border-width: 1px;
  border-color: #cecece;
`;
