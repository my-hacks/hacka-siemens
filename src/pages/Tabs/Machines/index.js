import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {
  Container,
  BoxMachine,
  NameMachine,
  ImageMachine,
  StatusMachineGraph,
  RightContainer,
  LeftContainer,
  BoxChart,
  TextMachine,
} from './styles';
import transport from '../../../assets/machines/transportador.jpg';
import transport_baixo from '../../../assets/machines/transporter_baixo.jpg';
import transport_efg from '../../../assets/machines/transporters_efg.jpg';
import transport_abcd from '../../../assets/machines/transporters_abcd.jpg';
import api from '../../../services/api';

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

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const dataRing = {
  labels: ["Press", "Water", "Temp"], // optional
  data: [0.4, 0.6, 0.8],
};

export class Machines extends Component {
  state = {
    data: {
      labels: ["Temp", "Pres", "Pres A.", "Pres V", "Carga", "Ener"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2, // optional
        }
      ],
    },
    status_1: '92%',
    status_2: '79%',
    status_3: '80%',
    status_4: '61%',
  };

  async componentDidMount() {
    const response = await api.get("/superagent");
    console.log(response);

    setInterval(() => {
      this.setState({
        status_1: Math.round(getRandomArbitrary(50, 80)) + '%',
        status_2: Math.round(getRandomArbitrary(50, 80)) + '%',
        status_3: Math.round(getRandomArbitrary(50, 80)) + '%',
        status_4: Math.round(getRandomArbitrary(50, 80)) + '%',
      });
    }, getRandomArbitrary(15000, 20000));

    setInterval(() => {
      this.setState({
        data: {
          labels: ["Temp", "Pres", "Pres A.", "Pres V", "Carga", "Ener"],
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
        },
      });

      {
        /* loopGraphics(); */
      }
    }, getRandomArbitrary(8000, 10000));
  }

  render() {
    const { status_1, status_2, status_3, status_4 } = this.state;
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
                <Text style={{ fontSize: 18, fontWeight: 500 }}>
                  {status_1}
                </Text>
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
                <TextMachine>Modelo L Série 718</TextMachine>
              </NameMachine>
              <StatusMachineGraph>
                <Text Text style={{ fontSize: 18, fontWeight: 500 }}>
                  {status_2}
                </Text>
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
                <Text Text style={{ fontSize: 18, fontWeight: 500 }}>
                  {status_3}
                </Text>
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
                <Text Text style={{ fontSize: 18, fontWeight: 500 }}>
                  {status_4}
                </Text>
              </StatusMachineGraph>
            </BoxMachine>
          </ScrollView>
          <TouchableOpacity
            onPress={() => Linking.openURL("dynamicar://")}
            style={{
              height: 50,
              width: 80,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#cecece',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: "#fff",
            }}
          >
            <Text> VER EM AR </Text>
          </TouchableOpacity>
        </RightContainer>
        <LeftContainer>
          <ScrollView>
            <View>
              <LineChart
                data={this.state.data}
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
