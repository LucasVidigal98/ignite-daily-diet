import { Button } from "@components/Button";
import { Container, ImageContent, Label, LabelDark, TextTypeStyleProps, Title } from "./styles";

type Props = {
  type?: TextTypeStyleProps;
}

import WomamImage from '@assets/womam.png';
import ManImage from '@assets/man.png';

export function ConfirmScreen({ type = 'SECONDARY' }: Props) {
  return (
    <Container>
      <Title type={type}>{type === "PRIMARY" ? 'Continue assim' : 'Que pena!'}</Title>

      {type === 'PRIMARY' && (
        <Label>
          Você continua
          <LabelDark> dentro da dieta. </LabelDark>
          Muito bem!
        </Label>
      )}

      {type === 'SECONDARY' && (
        <Label>
          Você
          <LabelDark> saiu da dieta </LabelDark>
          dessa vez, mas continue se esforçando e não desista!
        </Label>
      )}

      <ImageContent source={type === "PRIMARY" ? WomamImage : ManImage} />

      <Button text="Página inicial" style={{ width: 191 }}></Button>

    </Container>
  );
}