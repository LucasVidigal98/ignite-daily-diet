import { StatisticsHeader } from "@components/StatisticsHeader";
import { CardContainer, Container, Content, Title, ViewStyleProps } from "./styles";
import { StatisticsCard } from "@components/StatisticsCard";

export function Statistics() {
  return (
    <Container type={"PRIMARY"}>
      <StatisticsHeader />

      <Content>
        <Title>Estatísticas gerais</Title>

        <StatisticsCard style={{ marginTop: 23 }} title="22" subtitle="melhor sequência de pratos dentro da dieta" />

        <StatisticsCard title="109" subtitle="refeições registradas" />

        <CardContainer>
          <StatisticsCard title="99" subtitle="refeições dentro da dietas" big />
          <StatisticsCard style={{ marginLeft: 12 }} title="10" subtitle="refeições fora da dieta" type="SECONDARY" big />
        </CardContainer>
      </Content>
    </Container>
  );
}