import { ArrowButton, ArrowIcon, Container, Title, ViewStyleProps } from "./styles";

type Props = {
  type?: ViewStyleProps;
  title: string;
}

export function DietHeader({ type = 'DEFAULT', title }: Props) {
  return (
    <Container type={type}>
      <ArrowButton>
        <ArrowIcon name="arrow-left" />
      </ArrowButton>

      <Title>{title}</Title>
    </Container>
  )
}