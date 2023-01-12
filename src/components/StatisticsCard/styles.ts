import { View } from "react-native";
import styled, { css } from "styled-components/native";

export type ViewStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ViewStyleProps;
  big: boolean;
}

export const Container = styled(View) <Props>`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;

  ${({ big }) => css`
    min-height: ${big ? '107px' : '89px'};
    max-height: ${big ? '107px' : '89px'};
  `}

  flex: 1;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
  };
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XXL}px;
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