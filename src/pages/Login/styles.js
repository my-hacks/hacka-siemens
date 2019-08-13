import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #00ab66;
  align-items: stretch;
  justify-content: center;
  padding: 20px;
`;

export const ContainerText = styled.TextInput`
  height: 52px;
  background-color: #fff;
  border-radius: 10px;
  padding-left: 10px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  height: 52px;
  background-color: red;
  margin-top: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
