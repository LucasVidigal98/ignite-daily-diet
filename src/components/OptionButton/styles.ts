import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
  selected: boolean;
}

export const Container = styled(TouchableOpacity) <Props>`
  ${({ theme, type, selected }) => css`
    border: 1px solid ${selected ?
      (selected && type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK)
      : 'transparent'
    };
    background-color: ${type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  `}

  width: 159.5px;
  height: 50px;
  padding: 16px;
  border-radius: 6px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const BtnText = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Icon = styled(FontAwesome).attrs<Props>(({ theme, type }) => ({
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
  margin-right: 10px;
`;