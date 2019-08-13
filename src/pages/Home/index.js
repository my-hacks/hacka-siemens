import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Container, ContainerBoxes, BoxChoice } from "./styles";
import machine from "../../assets/img/machine.png";
import graph from "../../assets/img/graph.png";

export class Home extends Component {
  render() {
    return (
      <Container>
        <ContainerBoxes>
          <BoxChoice>
            <Text style={{ textAlign: 'center' }}>Maquinas da Fabrica</Text>
            <Image
              source={machine}
              resizeMode="cover"
              style={{ height: "70%", width: "100%" }}
            />
          </BoxChoice>
          <BoxChoice>
            <Text style={{ textAlign: 'center' }}>Acompanhamento Fabril</Text>
            <Image
              source={graph}
              resizeMode="cover"
              style={{ height: "70%", width: "100%" }}
            />
          </BoxChoice>
          <BoxChoice />
          <BoxChoice />
        </ContainerBoxes>
      </Container>
    );
  }
}

export default Home;
