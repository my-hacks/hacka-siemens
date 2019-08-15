import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  Container,
  Title,
  LineMachine,
  TitleLine,
  StatusMachineSuccess,
  StatusMachineAlert,
  StatusMachineDanger
} from "./styles";

export class HomeList extends Component {
  render() {
    return (
      <Container>
        <Title>Status das Maquinas por prioridades</Title>
        <LineMachine>
          <TitleLine>Rebinboca da parafuseta</TitleLine>
          <StatusMachineSuccess />
        </LineMachine>

        <LineMachine>
          <TitleLine>Rebinboca da parafuseta</TitleLine>
          <StatusMachineDanger />
        </LineMachine>

        <LineMachine>
          <TitleLine>Rebinboca da parafuseta</TitleLine>
          <StatusMachineAlert />
        </LineMachine>

        <LineMachine>
          <TitleLine>Rebinboca da parafuseta</TitleLine>
          <StatusMachineAlert />
        </LineMachine>
        <LineMachine>
          <TitleLine>Rebinboca da parafuseta</TitleLine>
          <StatusMachineAlert />
        </LineMachine>
      </Container>
    );
  }
}

export default HomeList;
