import { TouchableOpacityProps } from "react-native";
import { BtnText, ButtonTypeStyleProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps;
  text: string;
  selected?: boolean
}

export function OptionButton({ type = 'PRIMARY', selected = false, text, ...rest }: Props) {
  return (
    <Container type={type} selected={selected} {...rest} >
      <Icon name="circle" type={type} />
      <BtnText>{text}</BtnText>
    </Container>
  );
}