import React, { Component } from "react";
import { ScrollView } from "react-native";
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
        <ScrollView>
          <LineMachine>
            <TitleLine>Modu-Kleen™ Filtro "Bin Vent" Tipo Cartucho</TitleLine>
            <StatusMachineDanger />
          </LineMachine>
          <LineMachine>
            <TitleLine>Modu-Kleen™ Bin Vent/Dust Collector</TitleLine>
            <StatusMachineDanger />
          </LineMachine>
          <LineMachine>
            <TitleLine>BLENDCON™ Misturador a Ar</TitleLine>
            <StatusMachineDanger />
          </LineMachine>
          <LineMachine>
            <TitleLine>Modu-Kleen™ Filtro "Bin Vent" </TitleLine>
            <StatusMachineAlert />
          </LineMachine>
          <LineMachine>
            <TitleLine>Bin Vent/Dust Collector</TitleLine>
            <StatusMachineAlert />
          </LineMachine>
          <LineMachine>
            <TitleLine>Modu-Kleen™ Filtro Cartucho</TitleLine>
            <StatusMachineAlert />
          </LineMachine>
          <LineMachine>
            <TitleLine>Bella™ Misturador de Zona Fluidizada</TitleLine>
            <StatusMachineSuccess />
          </LineMachine>
        </ScrollView>
      </Container>
    );
  }
}

export default HomeList;
