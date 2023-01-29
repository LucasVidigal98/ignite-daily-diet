import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type ViewStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ViewStyleProps;
}

export const Container = styled(SafeAreaView) <Props>`
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

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const CardContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;
