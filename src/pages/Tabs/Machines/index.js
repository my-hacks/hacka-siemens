import React, { Component } from 'react';
import { Text, View, Image, ScrollView, Dimensions } from 'react-native';
import {
  Container,
  BoxMachine,
  NameMachine,
  ImageMachine,
  StatusMachineGraph,
  RightContainer,
  LeftContainer,
  BoxChart,
  TextMachine
} from './styles';
import transport from '../../../assets/machines/transportador.jpg';
import transport_baixo from '../../../assets/machines/transporter_baixo.jpg';
import transport_efg from '../../../assets/machines/transporters_efg.jpg';
import transport_abcd from '../../../assets/machines/transporters_abcd.jpg';

// import Chart from "react-native-chartjs";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2 // optional, default 3
};

const dataRing = {
  labels: ["Swim", "Bike", "Run"], // optional
  data: [0.4, 0.6, 0.8],
};

export class Machines extends Component {
  state = {
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2, // optional
        }
      ],
    },
  };

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
                  style={{ height: 80, width: 80 }}
                />
              </ImageMachine>
              <NameMachine>
                <TextMachine>Modelo J, Série 496</TextMachine>
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
                  style={{ height: 80, width: 80 }}
                />
              </ImageMachine>
              <NameMachine>
                <TextMachine>Transportador de Perfil Baixo</TextMachine>
                <TextMachine>Modelo L Série 720</TextMachine>
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
                  style={{ height: 80, width: 80 }}
                />
              </ImageMachine>
              <NameMachine>
                <TextMachine>Transportador</TextMachine>
                <TextMachine>Modelos E, F, G</TextMachine>
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
                  style={{ height: 80, width: 80 }}
                />
              </ImageMachine>
              <NameMachine>
                <TextMachine>Transportador</TextMachine>
                <TextMachine>Modelos E, F, G</TextMachine>
              </NameMachine>
              <StatusMachineGraph>
                <Text>Status</Text>
              </StatusMachineGraph>
            </BoxMachine>
          </ScrollView>
        </RightContainer>
        <LeftContainer>
          <ScrollView>
            <View>
              <Text>Bezier Line Chart</Text>
              <LineChart
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June"
                  ],
                  datasets: [
                    {
                      data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                      ],
                    }
                  ],
                }}
                width={370} // from react-native
                height={190}
                yAxisLabel={"$"}
                chartConfig={{
                  backgroundColor: "#000",
                  backgroundGradientFrom: "purple",
                  backgroundGradientTo: "#50C",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>
            <View>
              <LineChart
                data={this.state.data}
                width={370}
                height={190}
                chartConfig={chartConfig}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>
            <View>
              <ProgressChart
                data={dataRing}
                width={370}
                height={190}
                chartConfig={chartConfig}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>
          </ScrollView>
        </LeftContainer>
      </Container>
    );
  }
}

export default Machines;
