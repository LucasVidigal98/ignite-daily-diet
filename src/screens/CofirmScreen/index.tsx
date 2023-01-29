import { Button } from "@components/Button";
import { Container, ImageContent, Label, LabelDark, TextTypeStyleProps, Title } from "./styles";
import WomamImage from '@assets/womam.png';
import ManImage from '@assets/man.png';
import { useNavigation, useRoute } from "@react-navigation/native";

type Props = {
  type?: TextTypeStyleProps;
}

type RouteParams = {
  typeScreen: string;
}


export function ConfirmScreen({ type = 'SECONDARY' }: Props) {
  const route = useRoute();
  const { typeScreen } = route.params as RouteParams;

  const navigation = useNavigation();

  return (
    <Container>
      <Title type={typeScreen === "PRIMARY" ? 'PRIMARY' : 'SECONDARY'}>
        {typeScreen === "PRIMARY" ? 'Continue assim' : 'Que pena!'}
      </Title>

      {typeScreen === 'PRIMARY' && (
        <Label>
          Você continua
          <LabelDark> dentro da dieta. </LabelDark>
          Muito bem!
        </Label>
      )}

      {typeScreen === 'SECONDARY' && (
        <Label>
          Você
          <LabelDark> saiu da dieta </LabelDark>
          dessa vez, mas continue se esforçando e não desista!
        </Label>
      )}

      <ImageContent source={typeScreen === "PRIMARY" ? WomamImage : ManImage} />

      <Button
        text="Página inicial"
        style={{ width: 191 }}
        onPress={() => navigation.navigate('home')}
      />

    </Container>
  );
}