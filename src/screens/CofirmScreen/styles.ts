import styled, { css } from "styled-components/native";

export type TextTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: TextTypeStyleProps;
}


export const Container = styled.View`
  flex: 1;
  
  ${({ theme }) => theme.COLORS.GRAY_100}
  
  padding: 24px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<Props>`
   ${({ theme, type }) => css`
      color: ${type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
      font-size: ${theme.FONT_SIZE.XXL}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
`;

export const LabelDark = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const ImageContent = styled.Image`
  margin: 15px 0;
`;