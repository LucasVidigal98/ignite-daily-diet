import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';

export type ViewStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ViewStyleProps;
}

export const Container = styled.View<Props>`
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN : theme.COLORS.RED
  };

  width: 100%;
  height: 180px;
`;

export const BackButton = styled.TouchableOpacity`
  positon: absolute;
  left: 27px;
  top: 50px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XXXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
`;

export const TextContainer = styled.View`
  positon: absolute;
  top: 50px;
`;

export const BackIcon = styled(Feather).attrs<Props>(({ type, theme }) => ({
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 24
}))``;
