import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  width: 327px;
  height: 50px;
  border-radius: 6px;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GRAY_600 : theme.COLORS.GRAY_100
  };

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
`;

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
  size: 18
}))`
  margin-right: 10px;
`;