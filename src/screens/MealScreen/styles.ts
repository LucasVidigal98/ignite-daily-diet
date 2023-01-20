import styled, { css } from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons';

export type ViewStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ViewStyleProps;
}

export const Container = styled.View<Props>`
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN : theme.COLORS.RED
  };

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

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const MealDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  margin-top: 10px;
  margin-bottom: 20px;
`;

export const DateTitle = styled.Text`
   ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const DateText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  margin-top: 5px;
`;

export const Chip = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 50px;
  width: 144px;
  min-height: 34px;
  max-height: 34px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin-top: 20px;
`;

export const ChipText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const ButtonContainer = styled.View`
  margin-top: 315px;
`;

export const ChipIcon = styled(FontAwesome).attrs<Props>(({ theme, type }) => ({
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
  margin-right: 8px;
  margin-top: 2px;
`;