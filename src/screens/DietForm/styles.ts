import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  padding: 24px;
  height: 100%;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 24px;
  flex-direction: row;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;