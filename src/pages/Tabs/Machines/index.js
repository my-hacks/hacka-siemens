import React, { Component } from "react";
import { Text, View, Image, ScrollView, Dimensions } from "react-native";
import {
  Container,
  BoxMachine,
  NameMachine,
  ImageMachine,
  StatusMachineGraph,
  RightContainer,
  LeftContainer,
  BoxChart,
} from "./styles";
import transport from "../../../assets/machines/transportador.jpg";
import transport_baixo from "../../../assets/machines/transporter_baixo.jpg";
import transport_efg from "../../../assets/machines/transporters_efg.jpg";
import transport_abcd from "../../../assets/machines/transporters_abcd.jpg";
// import Chart from "react-native-chartjs";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

// const chartConfiguration = {
//   type: "bar",
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)",
//         ],
//         borderColor: [
//           "rgba(255,99,132,1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 1,
//       }
//     ],
//   },
//   options: {
//     maintainAspectRatio: false,
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         }
//       ],
//     },
//   },
// };
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientTo: "#08130D",
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
};

const dataRing = {
  labels: ['Swim', 'Bike', 'Run'], // optional
  data: [0.4, 0.6, 0.8]
};

export class Machines extends Component {
  state = {
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2 // optional
        },
      ]
    }
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
        <LeftContainer>
          <ScrollView>
            <View>
              <Text>Bezier Line Chart</Text>
              <LineChart
                data={{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                  ],
                  datasets: [
                    {
                      data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                      ]
                    },
                  ]
                }}
                width={450} // from react-native
                height={190}
                yAxisLabel={'$'}
                chartConfig={{
                  backgroundColor: '#000',
                  backgroundGradientFrom: 'purple',
                  backgroundGradientTo: '#50C',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
              />
            </View>
            <View>
              <LineChart
                data={this.state.data}
                width={450}
                height={190}
                chartConfig={chartConfig}
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
              />
            </View>
            <View>
              <ProgressChart
                data={dataRing}
                width={450}
                height={190}
                chartConfig={chartConfig}
                style={{
                  marginVertical: 8,
                  borderRadius: 16
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
