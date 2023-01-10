import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Icon, Title } from "./styles";
import { Feather } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps;
  text: string;
  icon?: keyof typeof Feather.glyphMap;
};

export function Button({ type = 'PRIMARY', text, icon, ...rest }: Props) {
  return (
    <Container type={type} {...rest} >
      {icon && <Icon name="plus" type={type} />}

      <Title type={type}>{text}</Title>
    </Container>
  );
}