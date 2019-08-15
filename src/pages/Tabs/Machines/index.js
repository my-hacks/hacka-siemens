import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import {
  Container,
  BoxMachine,
  NameMachine,
  ImageMachine,
  StatusMachineGraph,
  RightContainer,
  LeftContainer,
} from './styles';
import transport from '../../../assets/machines/transportador.jpg';
import transport_baixo from '../../../assets/machines/transporter_baixo.jpg';
import transport_efg from '../../../assets/machines/transporters_efg.jpg';
import transport_abcd from '../../../assets/machines/transporters_abcd.jpg';

export class Machines extends Component {
  render() {
    return (
      <Container>
        <RightContainer>
          <ScrollView>
            <BoxMachine>
              <ImageMachine>
                <Image
                  source={transport}
                  resizeMode="contain"
                  style={{ height: 90, width: 80 }}
                />
              </ImageMachine>
              <NameMachine>
                <Text>Modelo J, Série 496</Text>
              </NameMachine>
              <StatusMachineGraph>
                <Text>Status</Text>
              </StatusMachineGraph>
            </BoxMachine>
            <BoxMachine>
              <ImageMachine>
                <Image
                  source={transport_baixo}
                  resizeMode="contain"
                  style={{ height: 90, width: 80 }}
                />
              </ImageMachine>
              <NameMachine>
                <Text>Transportador de Perfil Baixo</Text>
                <Text>Modelo L Série 720</Text>
              </NameMachine>
              <StatusMachineGraph>
                <Text>Status</Text>
              </StatusMachineGraph>
            </BoxMachine>
            <BoxMachine>
              <ImageMachine>
                <Image
                  source={transport_efg}
                  resizeMode="contain"
                  style={{ height: 90, width: 80 }}
                />
              </ImageMachine>
              <NameMachine>
                <Text>Transportador</Text>
                <Text>Modelos E, F, G</Text>
              </NameMachine>
              <StatusMachineGraph>
                <Text>Status</Text>
              </StatusMachineGraph>
            </BoxMachine>

            <BoxMachine>
              <ImageMachine>
                <Image
                  source={transport_abcd}
                  resizeMode="contain"
                  style={{ height: 90, width: 80 }}
                />
              </ImageMachine>
              <NameMachine>
                <Text>Transportador</Text>
                <Text>Modelos E, F, G</Text>
              </NameMachine>
              <StatusMachineGraph>
                <Text>Status</Text>
              </StatusMachineGraph>
            </BoxMachine>
          </ScrollView>
        </RightContainer>
        <LeftContainer />
      </Container>
    );
  }
}

export default Machines;
