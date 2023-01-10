import { TouchableOpacityProps } from "react-native";
import { ArrowIcon, ButtonTypeStyleProps, Container, SubTitle, Title } from "./styles";

type Props = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps;
  title: string;
  subtitle: string;
  hasIcon?: boolean;
}

export function InfoCard({
  type = 'PRIMARY',
  title,
  subtitle,
  hasIcon = true,
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest}>

      <Title>{title}</Title>

      <SubTitle>{subtitle}</SubTitle>

      <ArrowIcon name="arrow-up-right" type={type} />

    </Container>
  );
}