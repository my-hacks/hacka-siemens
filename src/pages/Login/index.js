import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Container, ContainerText, ButtonLogin } from "./styles";
import dynamic from "../../assets/img/Dynamic.png";

export class Login extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Image
          source={dynamic}
          resizeMode="cover"
          style={{ marginBottom: 20, alignSelf: 'center', height: 200 }}
        />
        <ContainerText placeholder="Digite seu usuario" />
        <ButtonLogin onPress={() => navigation.navigate('Home')}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Login</Text>
        </ButtonLogin>
      </Container>
    );
  }
}

export default Login;
