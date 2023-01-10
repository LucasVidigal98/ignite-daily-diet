import { Container, Logo, UserIcon } from "./styles";

export function BaseHeader() {
  return (
    <Container>
      <Logo source={require('../../assets/logo.png')} />

      <UserIcon name="user-circle" />
    </Container>
  );
}