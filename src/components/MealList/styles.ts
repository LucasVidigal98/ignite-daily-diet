import { SectionList } from "react-native";
import styled, { css } from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons';

export type IconStyleType = 'NO_DEFICIT' | 'DEFICIT';

type Props = {
  type: IconStyleType;
}

export const Conatiner = styled(SectionList)`
  margin-top: 24px;
`;

export const ListTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  margin-bottom: 12px;
  margin-top: 12px;
`;

export const ListItem = styled.TouchableOpacity`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  width: 327px;
  height: 49px;
  border-radius: 6px;
  margin-bottom: 12px;
  padding: 14px 16px 14px 12px;

  flex-direction: row;
  align-items: center;
`;

export const ListItemContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ListItemTime = styled.Text`
   ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Vr = styled.View`
  height: 14px;
  width: 1px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  margin-left: 12px;
  margin-right: 12px;
`;

export const ListItemMeal = styled.Text`
   ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const ListEmpty = styled.Text`
 ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  text-align: center;
`;

export const ListItemIcon = styled(FontAwesome).attrs<Props>(({ theme, type }) => ({
  color: type === 'NO_DEFICIT' ? theme.COLORS.GREEN : theme.COLORS.RED
}))`
  position: absolute;
  right: 20px;
`;