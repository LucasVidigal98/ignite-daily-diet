import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';

export type ViewStyleProps = 'PRIMARY' | 'SECONDARY' | 'DEFAULT';

type Props = {
  type: ViewStyleProps;
}

export const Container = styled.View<Props>`
  background-color: ${({ theme, type }) => {
    switch (type) {
      case 'PRIMARY':
        return theme.COLORS.GREEN;
      case 'SECONDARY':
        return theme.COLORS.RED;
      default:
        return theme.COLORS.GRAY_300
    }
  }};

  width: 100%;
  height: 100px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 24px;
`;

export const Title = styled.Text`
   ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
  flex: 1;
`;

export const ArrowButton = styled.TouchableOpacity``;

export const ArrowIcon = styled(Feather).attrs(() => ({
  size: 24
}))``;