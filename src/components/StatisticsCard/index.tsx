import { ViewProps } from "react-native";
import { Container, SubTitle, Title, ViewStyleProps } from "./styles";

type Props = ViewProps & {
  type?: ViewStyleProps;
  big?: boolean;
  title: string;
  subtitle: string;
}

export function StatisticsCard({
  type = 'PRIMARY',
  big = false,
  title,
  subtitle,
  ...rest
}: Props) {
  return (
    <Container type={type} big={big} {...rest}>
      <Title>{title}</Title>

      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}