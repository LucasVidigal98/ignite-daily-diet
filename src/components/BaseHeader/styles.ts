import styled from "styled-components/native";
import { FontAwesome5 } from '@expo/vector-icons';

export const Container = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image``;

export const UserIcon = styled(FontAwesome5).attrs(() => ({
  size: 40
}))``;