import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: rgba(234, 239, 251, 1);
  padding: 30px 20px;
`;

export const Title = styled.Text`
  font-size: 20;
  font-weight: 400;
`;

export const FirstLine = styled.View`
  height: 100;
  width: 100%;
  /* background-color: orange; */
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const RightContent = styled.View`
  width: 10%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const LeftContent = styled.View`
  width: 90%;
  height: 100%;
  justify-content: center;
`;

export const Avatar = styled.View`
  height: 80;
  width: 80;
  border-radius: 100;
  background-color: #000;
`;

export const NameCompany = styled.Text`
  font-size: 25;
  font-weight: bold;
`;

export const MainContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const RightMainContent = styled.View`
  width: 50%;
  border-right-width: 1px;
  border-right-color: #cecece;
  padding: 10px;
`;

export const LeftMainContent = styled.View`
  width: 50%;
  flex-wrap: wrap;
  padding: 10px;
`;

export const BadgesArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CompanyData = styled.View`
  /* background-color: orange; */
`;

export const Badge = styled.View`
  height: 110;
  width: 110;
  border-radius: 100;
  border-width: 1px;
  border-color: #cecece;
  align-items: center;
  justify-content: center;
`;

export const ModelCompany = styled.View`
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px;
  margin-top: 20px;
  border-width: 1px;
  border-color: #cecece;
`;

export const ContainerBadge = styled.View`
  align-items: center;
  justify-content: center;
  height: 140;
  margin-bottom: 10px;
`;
