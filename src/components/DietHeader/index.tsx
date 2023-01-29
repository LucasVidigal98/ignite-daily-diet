import { useNavigation } from "@react-navigation/native";
import { ArrowButton, ArrowIcon, Container, Title, ViewStyleProps } from "./styles";

type Props = {
  type?: ViewStyleProps;
  title: string;
  new?: boolean;
}

export function DietHeader({ type = 'DEFAULT', title }: Props) {
  const navigation = useNavigation();

  function handleNavigation() {

  }

  return (
    <Container type={type}>
      <ArrowButton onPress={() => navigation.navigate('home')}>
        <ArrowIcon name="arrow-left" />
      </ArrowButton>

      <Title>{title}</Title>
    </Container>
  )
}