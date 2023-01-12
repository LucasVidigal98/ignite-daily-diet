import { BackButton, BackIcon, Container, SubTitle, TextContainer, Title, ViewStyleProps } from "./styles";

type Props = {
  type?: ViewStyleProps;
}

export function StatisticsHeader({ type = 'PRIMARY' }: Props) {
  return (
    <Container type={type}>
      <BackButton>
        <BackIcon name="arrow-left" type={type} />
      </BackButton>

      <TextContainer>
        <Title>90,86%</Title>
        <SubTitle>das refeições dentro da dieta</SubTitle>
      </TextContainer>
    </Container>
  );
}