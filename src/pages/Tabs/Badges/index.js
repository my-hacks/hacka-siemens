import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import {
  Container,
  Title,
  Avatar,
  FirstLine,
  RightContent,
  LeftContent,
  NameCompany,
  MainContainer,
  Badge,
  RightMainContent,
  LeftMainContent,
  BadgesArea,
  CompanyData,
  ModelCompany,
  ContainerBadge,
} from "./styles";
import coracoes from "../../../assets/img/3-coracoes-cafe-logo.png";
import badge_1 from '../../../assets/badges/badge_1.png';
import badge_2 from '../../../assets/badges/badge_2.png';
import badge_3 from '../../../assets/badges/badge_3.png';
import badge_4 from '../../../assets/badges/badge_4.png';

export class Badges extends Component {
  render() {
    return (
      <Container>
        <FirstLine>
          <RightContent>
            <Avatar>
              <Image
                source={coracoes}
                resizeMode="cover"
                style={{ height: 80, width: 80, borderRadius: 100 }}
              />
            </Avatar>
          </RightContent>
          <LeftContent>
            <NameCompany>Três Corações Alimentos S.A.</NameCompany>
          </LeftContent>
        </FirstLine>

        <MainContainer>
          <RightMainContent>
            <Text style={{ fontSize: 22, fontWeight: 500, lineHeight: 20 }}>
              Dados da Empresa
            </Text>
            <Text />
            <CompanyData>
              <Text style={{ fontSize: 20, fontWeight: 400 }}>
                Razão social : Três Corações Alimentos S.A.
              </Text>
              <Text />
              <Text style={{ fontSize: 20, fontWeight: 400 }}>
                Tipo : Empresa de capital fechado
              </Text>
              <Text />
              <Text style={{ fontSize: 20, fontWeight: 400 }}>
                Atividade: Alimentícia
              </Text>
              <Text />
              <Text style={{ fontSize: 20, fontWeight: 400 }}>
                Fundação: 1959 (60 anos) em São Miguel, Rio Grande do Norte como
                Café Nossa Senhora de Fátima
              </Text>
              <Text />

              <Text style={{ fontSize: 20, fontWeight: 400 }}>
                Sede: Eusébio, Ceará, Brasil
              </Text>
              <Text />

              <Text style={{ fontSize: 20, fontWeight: 400 }}>
                Produtos: Cafés Máquinas multibebidas Achocolatados Refrescos
                Derivados de milho e temperos
              </Text>
              <Text />

              <Text style={{ fontSize: 20, fontWeight: 400 }}>
                Website oficial 3coracoes.com.br
              </Text>
              <Text />
              <Text style={{ fontSize: 20, fontWeight: 400 }}>
                Cliente Dynamics desde 1991
              </Text>
              <Text />
            </CompanyData>
          </RightMainContent>
          <LeftMainContent>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
              Premios e Reconhecimentos
            </Text>
            <Text />
            <BadgesArea>
              <ContainerBadge>
                <Badge>
                  <Image
                    source={badge_1}
                    resizeMode="cover"
                    style={{ height: 100, width: 100 }}
                  />
                </Badge>
                <Text>Maquinario Pesado</Text>
                <Text>2018</Text>
              </ContainerBadge>
              <ContainerBadge>
                <Badge>
                  <Image
                    source={badge_2}
                    resizeMode="cover"
                    style={{ height: 100, width: 100 }}
                  />
                </Badge>
                <Text>Efetividade 365</Text>
                <Text>2018</Text>
              </ContainerBadge>
              <ContainerBadge>
                <Badge>
                  <Image
                    source={badge_2}
                    resizeMode="cover"
                    style={{ height: 100, width: 100 }}
                  />
                </Badge>
                <Text>Efetividade 365</Text>
                <Text>2019</Text>
              </ContainerBadge>
              <ContainerBadge>
                <Badge>
                  <Image
                    source={badge_3}
                    resizeMode="cover"
                    style={{ height: 100, width: 100 }}
                  />
                </Badge>
                <Text>0 Acidentes</Text>
                <Text>2017</Text>
              </ContainerBadge>
              <ContainerBadge>
                <Badge>
                  <Image
                    source={badge_4}
                    resizeMode="cover"
                    style={{ height: 100, width: 100 }}
                  />
                </Badge>
                <Text>Fabrica Modelo</Text>
                <Text>2019</Text>
              </ContainerBadge>
              <ContainerBadge>
                <Badge>
                  <Image
                    source={badge_4}
                    resizeMode="cover"
                    style={{ height: 100, width: 100 }}
                  />
                </Badge>
                <Text>Fabrica Modelo</Text>
                <Text>2018</Text>
              </ContainerBadge>
              <ContainerBadge>
                <Badge>
                  <Image
                    source={badge_4}
                    resizeMode="cover"
                    style={{ height: 100, width: 100 }}
                  />
                </Badge>
                <Text>Fabrica Modelo</Text>
                <Text>2017</Text>
              </ContainerBadge>
              <ContainerBadge>
                <Badge>
                  <Image
                    source={badge_4}
                    resizeMode="cover"
                    style={{ height: 100, width: 100 }}
                  />
                </Badge>
                <Text>Fabrica Modelo</Text>
                <Text>2016</Text>
              </ContainerBadge>
            </BadgesArea>
          </LeftMainContent>
        </MainContainer>
      </Container>
    );
  }
}

export default Badges;
